// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  exchangeHost: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
  postOfficeHost: 'http://0.0.0.0:3000/getActiveServices',
  bonusPlusHost: 'https://privat24.privatbank.ua/p24/accountorder?oper=prp&bonus&PUREXML'
};
