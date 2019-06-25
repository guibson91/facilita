import { Component, ViewChild, Input, AfterContentInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { makeCronologicalString } from '../../../util/util';
import { storage } from "firebase"
import 'firebase/storage';

@Component({
  selector: 'nano-uploadimage',
  templateUrl: './nano-uploadimage.component.html',
  styleUrls: ['./nano-uploadimage.component.scss']
})
/**
 * Componente para realizar o upload de imagens para o firebase
 * @param form O formGroup no qual se encontra o formControl image que será guardada a url da imagem.
 * @param storagePath a string que será usada como prefixo para guardar a imagem no storage do firebase.
 */
export class NanoUploadimageComponent implements AfterContentInit {

  @ViewChild('fileInput') fileInput;

  /**
   * Formulário
   */
  @Input() form: FormGroup;

  /**
   * Nome do atributo no formulário
   */
  @Input() control: FormControl;

  /**
   * Subdiretório de imagens
   */
  @Input() storagePath: string;

  /**
   * Será true enquanto a imagem estiver sendo upada para o storage.
   * Mostrar progressbar de upload
   */
  isUploadingImage: boolean = false;

  /**
   * Auxiliar para controlar o progress bar na view
   */
  snapshot: any;

  /**
   * Referência para o Storage do Firebase em /imagens
   */
  storageRef: storage.Reference;

  /**
   * Obter um prefixo randômico para garantir unicidade a imagem
   */
  prefix = makeCronologicalString() + "_";

  /**
   * Auxiliar que irá guardar a imagem no formato blob.
   */
  imageBlob: Blob;

  constructor() { }

  get _control(): AbstractControl {
    if (this.form && this.control) console.warn("Foi passado control e form para o Nano uploadimage. Deve-se passar apenas um dos dois");
    if (this.form) {
      if (!this.form.controls.image) {
        throw new Error("NanoUploadImage não pode ser chamado com um form sem image");
      }
      return this.form.controls.image
    }
    if (this.control) {
      return this.control
    }
    throw new Error("Nano Upload Image sem form nem control")
  }

  //Executado após conteúdo do componente ter sido inicializado
  ngAfterContentInit() {

    // Adicionando um tamanho mínimo para a url da imagem.
    // É adicionada strings na imagem como "uploading" e "error" para avisar que essa imagem está inválida(não tem mais de 10 caracteres)
    this._control.setValidators(
      Validators.compose(
        [
          this._control.validator,
          Validators.minLength(10)
        ]
      )
    );

    // Cria uma referência para o serviço storage na pasta correspondente ao storagePath
    this.storageRef = storage().ref('images/' + this.storagePath);

  }

  /**
   * Clicar no elemento input file para abrir a caixa de captura de imagem
   * Esse elemento está invisível na view, pois personalizamos nosso próprio layout
   * para captura de imagem
   */
  getPicture(): void {
    this.fileInput.nativeElement.click();
  }

  /**
   * Upload da imagem para o Storage do Firebase
   * @param file arquivo de imagem no formato Blob
   */
  private uploadImage(file: Blob): void {
    let metadata = {
      contentType: 'image/jpeg',
    };
    let uploadTask: storage.UploadTask = this.storageRef.child(this.prefix).put(file, metadata);

    uploadTask.on(storage.TaskEvent.STATE_CHANGED,
      // Durante o processo de upload (progress, pause, e resume events)
      (snapshot) => {
        this.snapshot = snapshot;
        this.isUploadingImage = true;
        // Atribuindo uma string de tamanho menor que 10 para deixar a imagem inválida no formulário.
        this._control.patchValue("uploading");
      },
      // Falha ao realizar upload
      (error) => {
        // Atribuindo uma string de tamanho menor que 10 para deixar a imagem inválida no formulário.
        this._control.patchValue("errorimg");
        console.error("Ocorreu algum erro ao realizar upload do arquivo, ", error.message);
      },
      // Upload realizado com sucesso
      () => {
        // Receber qual url da imagem
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          //Armazenar URL da imagem que está no Storage do Firebase
          this._control.patchValue(downloadURL);
          this.isUploadingImage = false;
        }).catch((err) => {
          this._control.patchValue("errorimg");
          console.error("Ocorreu algum erro ao realizar upload do arquivo, ", err.message);
        });
      })
  }

  /**
   * Ler o arquivo de imagem selecionado e atribuir à imagem do formulário
   * imediatamente após seleção do usuário
   * @param event retorno após usuário ter selecionado a imagem
   */
  processWebImage(event): void {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      this.imageBlob = (readerEvent.target as any).result;
    };
    // Se não possui arquivos
    if (!event.target.files[0]) return;

    //Ler o arquivo Blob e renderiza a imagem (local)
    reader.readAsDataURL(event.target.files[0]);
    this.uploadImage(event.target.files[0]);
  }

  /**
   * Obter a URL do background-image após a imagem ser selecionada
   */
  getProfileImageStyle(): string {
    let img = this.imageBlob || this._control.value || "assets/img/user_default.jpg";
    return 'url(' + img + ')'
  }

}
