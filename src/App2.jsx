// Nomeção de Componente
   // PascalCase
   // Nomeação de variavel, Função...
   // camelCase

// export default, posso importar com qualquer nome e sem chaves
// export "sem default", só posso importar entre chaves e com nome

// Self closing tag
   // <Header><Header>
   // <Header />

// Nomeação de classe em CSS
   // Metodologia BEM
   // Blocks
   // Elements
   // Modifiers
   // bloco__elemento--modificador
   // header
   // header__link
   // header--link--small
   // Nomes compostos são separados por -


// tag vazia em React se chama Fragment ou Fragmento

// Componente recebem "props"

// CTRL + ; = Comentário em qualquer linguagem

// ALT + 124 = Barra Vertical ||

// Usando função em JS "ex: useLocation()", sempre usilizando o nome da função e logo os parenteses


// Preciso pesquisar mais sobre desestruturação em JS

// Nomeação de classes
   // Kebabe-case 

// API signitica Application Programing Interface

// VH = height: 100vh; é view port hight, usado para destacar a tela inteira
   // Para dispositivos moveis SVH

// GAP = espaço entre os elementos filhos de um elemento Conteiner

// FR = fração. Usado para ajudar ajustar o tamanho dos componentes no CSS (1fr)

// auto-fit, minmax expandirá os itens da grade para preencher o espaço disponível | EX: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

// 
// {items === 5 ? (
//    <>
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//    </>
//  ) : (
//    <>
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//      <SingleItem />
//    </>
//  )}
// 

// Template Strings, são uma funcionalidade do JavaScript que permite criar strings de forma mais flexível e intuitiva. Utilizam crases (“) em vez de aspas simples ou duplas
   //Exemplos '$(title)-$(number + items)' = 'Artistas-25'


// 
// {Array(items)
//    .fill()
//    .map((currentValue, index) => (
//      <SingleItem key={`${title}-${index}`} />
//    ))}
// 

// Spread operator ...
   // O operador spread é uma ferramenta do JavaScript que permite expandir os elementos de um array ou objeto em outro array ou objeto
   // Permite desempacotar os elementos de um array ou as propriedades de um objeto em outro array ou objeto 
   // Permite copiar objetos, mesclar arrays ou objetos 
   // Permite espalhar os elementos de um iterável (como arrays, strings ou objetos) em outro iterável ou chamada de função 