type Org = string;

type ProdDomain<O extends Org> = `www.${O}.some-service.com`;
type StageDomain<O extends Org> = `www.${O}.some-service-stage.com`;

type ProdDomainToStageDomain = <O extends Org>(prod: ProdDomain<O>) => StageDomain<O>;

declare const prodDomainToStageDomain: ProdDomainToStageDomain;

const googleProdDomain = 'www.google.some-service.com';
const appleProdDomain = 'www.apple.some-service.com';
const facebookProdDomain = 'www.facebook.some-service.com';

const googleStageDomain = prodDomainToStageDomain(googleProdDomain); // 'www.google.some-service-stage.com';
const appleStageDomain = prodDomainToStageDomain(appleProdDomain); // 'www.apple.some-service-stage.com';
const facebookStageDomain = prodDomainToStageDomain(facebookProdDomain); // 'www.facebook.some-service-stage.com';


// есть у нас допустим некий прод и некий стейдж. последний юзается для тестирования
// сам сервис — некий ентерпрайз сервис который юзают разные организации и у них есть свои субдомены
// и допустим у нас есть прям в типах эти продовские домейны
// надо написать сугубо тип для функции которая будет принимать продовский домен тип которгого известен и
// возвращать стейдж домейн тоже с захардкоженным типом

// почитай что такое темплейт литералы типов

