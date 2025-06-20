Esse projeto foi criado com o objetivo de estudar e demonstrar diferentes padrões de design. Nesse caso, foi utilizada a linguagem PHP, mas os conceitos são praticamente independentes da linguagem (mais focado para linguagens orientadas a objetos). Além dos padrões de design, também utilizei para estudar sobre os princípios [S.O.L.I.D.](https://en.wikipedia.org/wiki/SOLID)

Para deixar o desafio mais interessante, **o código foi limitado [a um máximo de uma cláusula if] nas regras de negócio.**

## Padrões de design aplicados

**Mais informações sobre os padrões:** [Chain of Responsability](https://refactoring.guru/design-patterns/chain-of-responsibility) e [Strategy](https://refactoring.guru/design-patterns/strategy)

### Strategy

O padrão Strategy consiste em criar diferentes classes que juntas formam um algoritmo, mas cada uma pode ser separada com certa facilidade e trocada por outra equivalente sem quebrar o fluxo do código, mas adicionando efeitos colateiras ou alterando o resultado.

Um arquivo principal define a estratégia, e pega cada um desses aqruivos *"handlers"* para adicionar no seu algoritmo.

Temos aqui a classe `Counter.php`:

Nessa classe, utilizando a classe `Rule`, conseguimos definir uma estratégia para o algoritmo

```php
<?php

namespace FizzBuzz\Domain;

use FizzBuzz\Infra\Rule;

class Counter
{
    private $ruleChain; // A estratégia (ou a cabeça da cadeia de responsabilidade)
    private $position;

    public function __construct(Rule $ruleChain) // Inversão de Dependência (DIP)
    {
        $this->position  = 0;
        $this->ruleChain = $ruleChain;

    }

    public function count() // O método principal que utiliza a estratégia
    {
        $message = $this->ruleChain->replace($this->position); // Delegação para a estratégia/cadeia
        ++$this->position;

        return $message;
    }

    public function reset()
    {
        $this->position = 0;
    }
}
```

A classe `Counter` não precisa necessariamente saber o que está acontecendo dentro de `Rule`, contanto que a classe que estiver implementando a interface implemente-a de forma correta, seguindo o contrato da interface.
Dessa forma, qualquer arquivo derivado de `Rule` pode ser usado como a "estratégia" de execução do `Counter`.

---

### Chain of Responsability

O padrão CoR consiste em criar diferentes classes que atuarão em cima do request na ordem que foi definida. As classes podem ser chamadas *handlers*, e cada uma decide se vai agir em cima do objeto ou passar para a próxima da cadeia. 

*As definições sobre os princípios SOLID são apenas rascunhos sobre meu entendimento delas.*

A classe *handler* seria a classe `Rule`:

```php
<?php

namespace FizzBuzz\Infra;

interface Rule
{
    public function replace(int $value): string;
}
```

À partir dessa interace, podemos criar diferentes regras que fazer um "replace" de um valor, recebendo um parâmetro e retornando outro baseado em alguma regra.
Para o problema em questão, FizzBuzz, implementei uma regra chamada `ModRule`, que faz o *mod* de um número (retornando o restante da divisão).

```php
use FizzBuzz\Infra\Rule;

class ModRule implements Rule
{
    protected $number;
    protected $message;
    protected $nextRule;
    public function __construct(int $number, string $message, Rule $nextRule = null)
    {
        $this->number 	= $number;
        $this->message 	= $message;
        $this->nextRule = $nextRule;
    }
    
    public function replace(int $value) : string
    {
        $message = (string) $value; // Valor padrão se nenhuma regra for aplicada
        if (isset($this->nextRule)) { // Se houver uma próxima regra, passa a responsabilidade
            $message = $this->nextRule->replace($value);
        }
        
        // A "única" instrução if relevante para a regra específica
        if ($message === (string) $value AND 
            $value !== 0 AND 
            $value % $this->number === 0)
        {
            $message = $this->message;
        }

        return $message;
    }
}
```

## Único `if`

Aqui na classe `ModRule` vemos a implementação principal da regra de negócio que será usada como o padrão Strategy para resolução do desafio.
Como é possível ver, ela possui doi s ifs... Mas, parando para analisar, um deles é apenas para garantir que existe uma próxima regra definida, o que é algo relacionado ao design de Chain of Responsability. E tirando esse, sobra o único `if` que realmente impacta na regra de negócio:

```php
if ($message === (string) $value AND
	$value !== 0 AND 
    $value % $this->number === 0)
{
	$message = $this->message;
}
```

