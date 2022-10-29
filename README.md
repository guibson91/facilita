# Deploy

Foi realizado configuração de múltiplos hosting

target: 'coca',
site_id: 'mobiup-konnect-consumidor',
url: https://mobiup-konnect-consumidor.web.app

firebase deploy --only hosting:TARGET_NAME

Mais informações: https://firebase.google.com/docs/hosting/multisites

- Criar SITE_ID
firebase hosting:sites:create mobiup-konnect-consumidor

- Criar target para novo website:
firebase target:apply hosting coca mobiup-konnect-consumidor

# Facilita

Facilita é um sistema criado em **Ionic 4 e Firebase** destinado a melhorar os serviços de atendimento, delivery, relacionamento e financeiro de estabelecimentos que utilizem um cardápio para ofertar seus produtos.

## Firebase

**Facilita** utiliza como backend o [Firebase](https://console.firebase.google.com/). A propriedade do projeto está em developer@nanocode.com.br.


## OneSignal

Conta: contato@nanocode.com.br

## Plugins

1 - Facebook Login

Configurações estão no app Facilita no [Facebook Apps](https://developers.facebook.com/apps) na conta guibson1991@gmail.com

2 - Google Login

Configurações do projeto estão no app Facilita no [Google Console](https://console.developers.google.com/) na conta developer@nanocode.com.br


## Documentação

**Facilita** utiliza [Compodoc](https://github.com/compodoc/compodoc) para gerar a documentação do projeto.

1 - Instalar e gerar documentação

```
npm install -g @compodoc/compodoc
npm run compodoc
```

2 - Os **ícones** da aplicação foram obtidos pelo [Fontastic](http://fontastic.me/). Estão salvos na conta jvmdo2008@gmail.com.
Realizar download do pacote de ícones desejado, e copiar src/assets/menus_fonts.

3 - Utiliza o [Cron-Job](https://cron-job.org/en/) para agendamentos de requisições. Conta jvmdo2008@gmail.com.


## Knowledge BUGS

### Error 10 - Auth Google

- ID configurado SHA1: br.com.nanocode.facilita
- Pra virar pra produção, precisamos configurar SHA1 pra apk release também

```
http://uttesh.blogspot.com/2017/08/error-10-cordova-google-plus-login-ionic.html

OBS: Pra gerar SHA1 ou SHA256: https://developers.google.com/android/guides/client-auth
```