# Resumo do projeto — Landing page Esmalteria da Jana

> Documento de referência do site desenvolvido em 27/09/2026. Complementa `contexto-lp-esmalteria-da-jana.md` e `contexto-lp-instagram-jana.md`.

## 1. Objetivo

Uma landing page única com **duas abas** para dois públicos:

- **Agendamento:** para clientes finais marcarem serviços de unha com a Jana em João Pessoa. O atendimento é feito pelo WhatsApp.
- **Curso:** para profissionais que querem o **Curso de Molde F1 com Naturalidade**, presencial e com acesso online depois.

A troca entre as abas é feita por um seletor no topo (Agendamento | Curso), com uma transição de cortina. O endereço do site muda para `#agendamento` ou `#curso`, e os botões voltar/avançar do navegador funcionam.

## 2. Decisões tomadas com a cliente

| Tema | Decisão |
|---|---|
| Nome da profissional | **Jana Melo** |
| Nome da marca | **Esmalteria da Jana** |
| WhatsApp | **(83) 99645-2065** (o mesmo do site antigo) |
| Instagram | **@esmalteriadajana_jp** |
| Endereço | **R. Teixeira de Freitas, 53 - Cruz das Armas, João Pessoa - PB, 58085-010** |
| Preços dos serviços | **Não aparecem no site.** São passados pelo WhatsApp. |
| Tempo de aplicação | **Cerca de 1 hora** |
| Preços do curso | Aparecem no site, conforme a tabela do contexto |
| Fotos | Apenas fotos reais da Jana e dos trabalhos dela |

### Turmas do curso

| Turma | Quando | Valor total | Inscrição | Restante |
|---|---|---|---|---|
| Goiana - PE | Outubro | R$ 300,00 | R$ 80,00 | Semanal, até quitar |
| Santa Cruz - PE | Outubro | R$ 300,00 | R$ 80,00 | Semanal, até quitar |
| João Pessoa - PB | 08 de novembro, das 9h às 17h | R$ 397,00 | R$ 97,00 | Semanal, até quitar |

### Serviços (sem valores no site)

Aplicação (≈ 1 hora) · Manutenção · Esmaltação em gel · Banho de gel · Pedicure em gel.

Os preços, apenas para referência interna, estão na tabela de serviços de `contexto-lp-esmalteria-da-jana.md`.

## 3. Tecnologias

- **HTML, CSS e JavaScript puros**, sem framework nem etapa de build.
- **GSAP 3.15** com os plugins **ScrollTrigger**, **SplitText** e **MorphSVG**, todos salvos localmente em `site/assets/vendor/`.
- **Lenis 1.3** para a rolagem suave, sincronizado com o GSAP.
- **Fontes locais** em `site/assets/fonts/`:
  - **Bricolage Grotesque** (variável, pesos 200–800): títulos.
  - **Figtree** (variável, pesos 300–900): textos.
- O mapa é um **Google Maps** incorporado, sem chave de API.

## 4. Estrutura de pastas

```text
Esmalteria da Jana/
├── contexto-lp-esmalteria-da-jana.md      ← contexto do site antigo e tabelas de preço
├── contexto-lp-instagram-jana.md          ← análise do Instagram
├── resumo-projeto-esmalteria-da-jana.md   ← este documento
├── references/                            ← HTML de referência, design system e capturas
├── img/                                   ← fotos originais enviadas pela cliente
├── fonts/                                 ← fontes originais
└── site/                                  ← O SITE
    ├── index.html
    └── assets/
        ├── css/style.css
        ├── js/main.js
        ├── fonts/  (bricolage-grotesque.woff2, figtree.woff2)
        ├── img/    (fotos recortadas e otimizadas em .webp)
        └── vendor/ (gsap, ScrollTrigger, SplitText, MorphSVGPlugin, lenis)
```

## 5. Como abrir o site

Dentro da pasta `site/`, rode:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`. Abrindo o `index.html` direto pelo navegador (`file://`), as fontes podem não carregar.

Para publicar, basta enviar a pasta `site/` inteira para qualquer hospedagem estática, como Vercel, Netlify ou a hospedagem atual do domínio.

## 6. Identidade visual

A paleta foi extraída das artes oficiais do curso postadas pela cliente: cacau, rosé gold e blush.

| Token | Cor | Uso |
|---|---|---|
| `--ink` | `#2C1411` | Texto principal no fundo claro, texto dos botões |
| `--mocha` | `#603C37` | Texto secundário no fundo claro |
| `--blush` | `#F8E9E5` | Fundo da aba Agendamento |
| `--blush-2` / `--blush-3` | `#F2DAD4` / `#EBCAC3` | Superfícies e bordas claras |
| `--cocoa` | `#2B1513` | Fundo da aba Curso |
| `--cocoa-alt` | `#231110` | Seções alternadas do Curso |
| `--cocoa-card` | `#3B211E` | Cartões no fundo escuro |
| `--cocoa-footer` | `#1A0B0A` | Rodapé |
| `--cream` | `#FBEEEA` | Texto claro e ingressos |
| `--rose` / `--rose-light` / `--rose-deep` | `#D8858E` / `#E4AEB4` / `#B8646C` | Destaques e ícones |
| `--rose-grad` | degradê `#F0C6C6 → #C9767C` | Botões, que imitam o rosé gold das artes |

**Elementos de assinatura:**

- Molduras em **arco**, com topo semicircular.
- **Pictogramas de formatos de unha** (quadrada, amendoada, bailarina, stiletto e babyboomer).
- **Selo circular** que gira.
- **Faixas de palavras em movimento**.
- **Ingressos com picote** para as turmas.

Os botões são sempre rosé com **texto escuro**, por causa do contraste.

## 7. Aba Agendamento (tema claro)

1. **Topo:** título "Alongamento em gel com hora marcada em João Pessoa.", botões de ação, três destaques (≈1h, hora marcada, sem preparadores), fotos em arco e o selo "O natural encanta".
2. **Faixa de serviços** em movimento.
3. **Trabalhos recentes:** galeria de 5 fotos em arco e um arco com link para o Instagram.
4. **Monte seu horário**, o formulário de agendamento:
   - A cliente marca **um ou mais serviços**. É obrigatório escolher pelo menos um antes de abrir o WhatsApp.
   - Se marcar Aplicação ou Manutenção, aparece a escolha do **formato da unha**. A prévia se transforma no formato escolhido e há uma opção "quero ajuda para escolher".
   - Ela escolhe o **melhor período** (manhã, tarde ou tanto faz).
   - O botão abre o WhatsApp com a mensagem pronta, por exemplo:
     > Olá, Jana! Vim pelo site e quero agendar um horário.
     > *Serviços:* Aplicação, Esmaltação em gel
     > *Formato:* Amendoada
     > *Melhor período:* Tarde
     > Pode me passar os valores e os horários disponíveis?
5. **Quem faz suas unhas é a Jana:** foto, três diferenciais e números (+5.000 alunas, 84,7 mil seguidores).
6. **Dúvidas frequentes:** 5 perguntas, com uma aberta por vez.
7. **Fechamento com mapa:** "Pronta para marcar seu horário?", endereço, link "Como chegar" e o Google Maps.

## 8. Aba Curso (tema escuro)

1. **Topo:** "Aprenda Molde F1 com *naturalidade*." Tem a foto da Jana com cartões flutuantes (Curso online, Certificado nacional), brilhos e selo "+5.000 alunas formadas", além dos botões das 3 turmas com ponto pulsando. No desktop, os elementos se movem com o mouse.
2. **Faixa** de diferenciais em movimento.
3. **O que é o Molde F1?:** blocos de tamanhos diferentes, com foto (Resultado natural), relógio animado até 60 min (Unhas em até 1 hora), Alta durabilidade e Mais clientes/mais dinheiro.
4. **O que você aprende:** lista numerada com uma imagem em arco que fica parada e troca a cada tópico durante a rolagem. Os tópicos são Aplicação com naturalidade, Manutenção com naturalidade, Esmaltação em gel Babyboomer e Acabamento sem infiltrações.
5. **Escolha sua turma:** 3 ingressos com data e valores, cada um com botão de WhatsApp que já traz a cidade na mensagem. No desktop, inclinam em 3D com o mouse.
6. **Presencial na turma, online depois:** jornada em 5 etapas (vaga, turma, certificado e brindes, curso online, mais clientes).
   - No desktop, a página segura a seção e os cartões correm na horizontal.
   - No celular, é uma linha do tempo vertical.
7. **Qual é o seu momento?:** abas Estou começando / Já atuo / Quero me aperfeiçoar, cada uma com texto e mensagem de WhatsApp próprios.
8. **Quem ensina é a Jana:** foto, frase "Experiência real, ensino com amor.", diferenciais e números.
9. **Prefere começar online?:** cursos Molde F1 Expert e Unhas Softgel, com acesso vitalício.
10. **Dúvidas sobre o curso:** 5 perguntas, com uma aberta por vez.
11. **Fechamento:** "Garanta sua vaga na próxima turma." e "Quero turma na minha cidade".

## 9. Navegação e recursos gerais

- **Cabeçalho fixo** com a marca, o menu de seções da aba atual (a seção visível fica marcada) e o seletor Agendamento | Curso com contorno de destaque.
- **Celular e tablet:** botão "Menu" que abre uma tela com o seletor das abas e as seções.
- **Botão fixo no celular** ("Agendar meu horário" ou "Escolher minha turma"). Ele aparece depois do topo e some perto do formulário, das turmas e do fechamento.
- **Rodapé** com endereço, WhatsApp e Instagram.
- **Animações:**
  - títulos entrando linha a linha;
  - fotos em arco que se abrem de baixo para cima;
  - elementos que se movem em velocidades diferentes durante a rolagem;
  - faixas que aceleram com a rolagem;
  - números que sobem até o valor final;
  - cortina na troca de aba.
- **Acessibilidade:**
  - navegação por teclado;
  - perguntas e abas acessíveis a leitores de tela;
  - link "Pular para o conteúdo";
  - com a opção de reduzir movimento ativada no aparelho, as animações e a rolagem suave são desligadas e o conteúdo aparece direto.
- **SEO:** título, descrição, Open Graph e dados estruturados de salão de unhas com endereço e telefone.

## 10. Imagens usadas (`site/assets/img/`)

| Arquivo | Origem | Onde aparece |
|---|---|---|
| `unhas-glitter-rose.webp` | `img/unhas 2.jpeg` | Topo do Agendamento, galeria, "O que você aprende" (01) |
| `unhas-glitter-rose-detalhe.webp` | recorte de `unhas 2.jpeg` | Arco pequeno do topo do Curso, etapa 02 da jornada |
| `unhas-quadrada-perolada.webp` | `img/unhas 3.jpeg` | Galeria, bloco "Resultado natural" |
| `unhas-foil-detalhe.webp` | recorte de `unhas 3.jpeg` | Arco pequeno do topo do Agendamento, galeria |
| `unhas-cromada-lilas.webp` | `img/unhas 1.jpeg` | Galeria |
| `unhas-cromada-detalhe.webp` | recorte de `unhas 1.jpeg` | "O que você aprende" (04) |
| `unhas-glitter-amendoada.webp` | recorte da arte do curso | Galeria, "O que você aprende" (02) |
| `jana-retrato.webp` | recorte da arte do curso (story) | Topo do Curso |
| `jana-estudio.webp` | recorte da arte do curso (post) | "Quem faz" e "Quem ensina" |
| `og-esmalteria-da-jana.jpg` | recorte da arte do curso | Imagem de compartilhamento em redes sociais |

Para trocar uma foto, substitua o arquivo em `site/assets/img/` mantendo o mesmo nome, ou ajuste o `src` no `index.html`.

## 11. Onde editar o quê

| Quero mudar... | Onde |
|---|---|
| Textos, turmas, datas e valores | `site/index.html`. Os ingressos ficam na seção `id="turmas"`. |
| Mensagens de WhatsApp dos botões | Atributo `data-wa="..."` de cada link no `index.html` |
| Mensagem do agendamento | Função `bookingMessage()` em `site/assets/js/main.js` |
| Número do WhatsApp | Constante `WA_NUMBER` no `main.js` e os links `https://wa.me/5583996452065` no `index.html` |
| Cores, fontes e espaçamentos | Variáveis em `:root` no início de `site/assets/css/style.css` |
| Itens do menu de seções | Listas `sections-nav__list` no cabeçalho do `index.html` (`data-for="agendamento"` e `data-for="curso"`) |
| Endereço e mapa | Seção `id="localizacao"`, dúvida "Onde é o atendimento?", rodapé e dados estruturados no `<head>` |

## 12. Pendências e pontos a validar com a cliente

- **Datas exatas** das turmas de Goiana e Santa Cruz. Hoje aparecem só como "Outubro".
- **Links diretos dos cursos online** (Kiwify, por exemplo). Hoje os botões levam ao WhatsApp.
- **Depoimentos reais** de clientes e alunas. Não foram incluídos, porque os do site antigo pareciam de exemplo.
- **Revisão dos textos que foram escritos para o site** a partir dos documentos de contexto:
  - descrições dos serviços;
  - blocos do método;
  - etapas da jornada;
  - abas "Qual é o seu momento?".
- **Mais fotos em alta resolução**, sem texto por cima, para ampliar a galeria e ter uma foto da Jana dando aula. Seria bom também uma foto real de esmaltação Babyboomer, que hoje aparece como ilustração.
- **Detalhes do curso não confirmados**, que ficaram fora do site de propósito:
  - carga horária das turmas de PE;
  - material incluso;
  - tempo de acesso ao curso online.
