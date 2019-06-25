
# Configurações

## OneSignal

conta: contato@nanocode.com.br

# Build

## Android

.keystore

alias: facilita
senha: 3181282

## Assinar keysotore (na raiz do projeto)

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore facilita.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk facilita

## Descompactar APK (na raiz do projeto)

zipalign -v 4 app-release-unsigned.apk Facilita.apk