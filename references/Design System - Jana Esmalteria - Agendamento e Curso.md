# Design system — Jana Esmalteria

**Escopo:** análise das 12 capturas de tela da landing page, em ordem cronológica de `5.07.46 PM` a `5.08.33 PM`, em 27/09/2026.  
**Leitura estrutural:** há **duas páginas/abas de navegação do mesmo site**: **Agendamento**, com fundo rosa claro, e **Curso de Molde F1**, com fundo vinho escuro. O rodapé vinho da página de Agendamento é uma seção de fechamento dentro dessa página; não sinaliza troca de aba. O menu `Agendamento | Curso` faz a transição de rota/página.  
**Natureza da evidência:** capturas estáticas de desktop, cada uma com 2048 × 1280 px, incluindo a interface do navegador. Não há HTML, CSS, arquivos de fontes, estados interativos completos nem capturas mobile. Valores hexadecimais abaixo vêm dos pixels dominantes das imagens; dimensões de interface e comportamentos não visíveis são **aproximações ou recomendações**, conforme indicado.

## 1. Visão geral e conceito

O sistema contrapõe **serviço individual e acolhedor** (rosa claro, texto ameixa) e **formação profissional e imersiva** (vinho, texto quase branco). Os mesmos elementos unem as páginas: tipografia sans serif de alto peso, rosa vibrante em CTAs e pictogramas, arcos com topo semicircular, divisórias finas, blocos com muito respiro e sublinhados finos. A comunicação é direta e local: João Pessoa para agendamento; Goiânia como próxima turma demonstrada no curso. O desenho observado ainda é um **protótipo com placeholders**, não uma página com todos os dados e fotografias prontos.

### 1.1 Elementos invariantes e variações

| Elemento | Agendamento | Curso | Regra compartilhada |
|---|---|---|---|
| Fundo principal | Rosa pálido `#F4E1E7` | Vinho `#4F0E2F` / seção alternada `#43092A` | O tema de cor identifica a aba/página. |
| Texto principal | Ameixa quase preta `#2B0A1C` | Branco rosado `#FBF0F2` | Alto contraste, mesma linguagem tipográfica. |
| CTA primário | Rosa `#FF4D8D`, texto escuro | Idêntico | Cápsula sem ícone. |
| Superfície de cartão | Branco quente `#FFFAF9` | Rosa branco `#FBF0F2` | Arredondamento generoso. |
| Grafismo | Arcos rosa médio `#EDD0DA` | Arcos vinho elevado `#57153A`, ou foto rosa | Forma de janela/unha, sem textura visível. |
| Link secundário | Texto escuro e sublinhado rosa | Texto claro e sublinhado rosa | Link textual, ao lado do CTA ou em conteúdo. |
| FAQ | Fundo rosa, divisórias discretas | Fundo vinho, divisórias discretas | Duas colunas: título à esquerda, perguntas à direita. |
| Fechamento | Faixa vinho `#3A0823` | Faixa vinho ainda mais escura `#3A0823` | Repete CTA + link, seguido de rodapé. |

## 2. Inventário da página e ordem dos blocos

### 2.1 Aba 1 — Agendamento

1. **Cabeçalho:** assinatura tipográfica `Jana Esmalteria` à esquerda; links `Agendamento` e `Curso` à direita; item da página atual com sublinhado discreto.
2. **Hero:** coluna esquerda com H1 `Alongamento em gel com hora marcada em João Pessoa.`, parágrafo de suporte e dois CTAs; coluna direita com arco grande para foto da mão e arco pequeno sobreposto para detalhe da unha.
3. **Trabalhos recentes:** título à esquerda, link para `@esmalteriadajana_jp` à direita; seis fotografias em formato de arco com alternância vertical de altura/posição, atualmente placeholders `TRABALHO 1–6`.
4. **Agendamento:** coluna esquerda com título, explicação e lista vertical de três serviços (`Alongamento em gel`, `Manutenção`, `Pedicure em gel`), separados por linhas. Coluna direita com painel interativo de escolha de formato de unha, quatro opções em grade 2 × 2, ajuda para indecisas e CTA WhatsApp.
5. **Sobre Jana:** fotografia retrato em arco à esquerda; título, apresentação, trecho a confirmar e três benefícios com marcadores rosa à direita.
6. **Dúvidas frequentes:** título à esquerda e quatro itens expansíveis à direita; primeiro expandido nas capturas.
7. **Fechamento + rodapé:** bloco vinho com pergunta `Pronta para marcar seu horário?`, CTA de agendamento e link para o curso; linha horizontal; marca, localização/atendimento e Instagram.

### 2.2 Aba 2 — Curso de Molde F1

1. **Cabeçalho compartilhado:** mesma marca e navegação, agora com `Curso` assinalado como página ativa.
2. **Hero:** H1 `Curso de Molde F1 com a Jana`, texto de apoio e CTA `Garantir minha vaga` à esquerda; cartão de `Próxima turma` à direita com cidade `Goiânia GO`, quatro linhas de dados e CTA interno.
3. **O que você aprende na turma:** título e introdução; quatro placas em arco com ícones estilizados dos formatos `Quadrada`, `Amendoada`, `Bailarina` e `Stiletto`.
4. **Presencial na turma, online depois:** título e matriz de conteúdo em duas colunas. Linha 1: `Na turma` / `Depois da turma`. Linha 2: `O que está incluso` / `Para quem é`.
5. **Quem ensina:** retrato de Jana dando aula em arco à esquerda, credenciais e link para Instagram à direita.
6. **Dúvidas sobre o curso:** título à esquerda e cinco itens expansíveis à direita; primeiro expandido nas capturas.
7. **Fechamento + rodapé:** chamada `Garanta sua vaga na turma de Goiânia`, botão primário e link `Quero turma na minha cidade`; marca, informação de atendimento e Instagram.

**Atenção à terminologia:** as duas opções no topo são páginas/rotas navegáveis, embora o usuário as chame de “abas”. Não confundir essas páginas com as quatro **opções selecionáveis** de formato da unha dentro do painel de agendamento.

## 3. Cores e tokens

### 3.1 Paleta extraída

| Token proposto | Cor | Ocorrência e finalidade | Grau de confiança |
|---|---|---|---|
| `--ink` | `#2B0A1C` | Títulos e corpo fortes no fundo rosa; texto do botão rosa. | Alto; cor dominante de texto. |
| `--blush-bg` | `#F4E1E7` | Fundo principal da página de agendamento. | Alto; pixel dominante. |
| `--blush-panel` | `#EDD0DA` | Arcos de foto vazios e galeria. | Alto; pixel dominante. |
| `--wine` | `#4F0E2F` | Fundo principal de trechos da página de curso. | Alto; pixel dominante. |
| `--wine-deep` | `#43092A` | Fundo alternado em seções do curso. | Alto; pixel dominante. |
| `--wine-footer` | `#3A0823` | CTA final/rodapé, em ambas as páginas. | Alto; pixel dominante. |
| `--wine-card` | `#57153A` | Placas em arco da seção de formatos do curso. | Alto; pixel dominante. |
| `--hot-pink` | `#FF4D8D` | Botões, ícones e sinais `+`/`−` do FAQ. | Alto; pixel dominante. |
| `--cream-white` | `#FBF0F2` | Texto claro no vinho e painel claro do curso. | Alto; pixel dominante. |
| `--card-white` | `#FFFAF9` | Superfície do seletor de formato. | Alto; pixel dominante. |
| `--highlight-review` | `#FFE08B` | Destaques `[CONFIRMAR: ...]` do protótipo. | Alto; **marcação editorial provisória**, não cor funcional da interface pronta. |
| `--rose-muted` | `#8A5A6C` | Texto auxiliar nos placeholders e usos secundários. | Médio; pode variar de área para área. |

**Contrastes calculados para esses pares:** `--ink` sobre `--blush-bg` ≈ **14,42:1**; `--cream-white` sobre `--wine` ≈ **13,12:1**; `--ink` sobre `--hot-pink` ≈ **5,76:1**. Texto claro sobre o botão rosa ≈ **2,81:1**, portanto deve-se manter **texto escuro** no botão. `#8A5A6C` sobre rosa claro fica em ≈ **4,46:1**: evite essa combinação para textos pequenos sem escurecer levemente a tinta ou verificar a cor real do elemento. São cálculos para as cores amostradas, não auditoria do produto final.

### 3.2 Regras de aplicação

- Fundo rosa contínuo define a página de serviço. Pequenas variações de tom em seções podem vir de divisórias, sombra e captura; **não criam novas abas**.
- Curso alterna `--wine` e `--wine-deep` para separar blocos da mesma página. O rodapé usa `--wine-footer` nas duas páginas, amarrando a identidade.
- Rosa intenso aparece com parcimônia: ação, seleção, ícone ou detalhe de link. Não pintar parágrafos inteiros de rosa.
- Branco quente é superfície de cards; não há efeito vidro, gradiente ou ilustração complexa observável.
- Destaques amarelos indicam informações pendentes de confirmação, inclusive dentro de FAQ e cartão. Removê-los da versão publicada após resolver cada texto.

## 4. Tipografia, hierarquia e redação

### 4.1 Família e características

Uma **sans serif contemporânea, de desenho geométrico/humanista e peso alto** domina títulos, cabeçalho, botões e subtítulos. Minúsculas de grande altura x, formas compactas, títulos de entrelinha curta e peso aproximadamente 700–800. Corpo na mesma família ou em sans muito próxima, peso 400–500. **A família exata não é verificável por screenshot**; Inter, Arial ou similar podem ser candidatos de implementação, mas não devem ser registrados como fonte original confirmada. Não há evidência de serifada, manuscrita, condensada ou fontes decorativas. A marca no header é texto em negrito, sem símbolo de logo visível.

### 4.2 Escala visual observada e escala sugerida para CSS

As capturas são pixels de tela, possivelmente com escala/zoom de navegador desconhecidos. A tabela dá **proporções e intervalos CSS para reconstrução**, não medidas extraídas do código-fonte.

| Papel | Característica observada | Implementação inicial sugerida |
|---|---|---|
| H1 do hero | Grande, muito pesado, 2–3 linhas; largura intencionalmente limitada. | `clamp(44px, 4.6vw, 72px)`, `font-weight: 750–800`, `line-height: 0.98–1.06`, `letter-spacing: -0.035em`. |
| Chamada final | Próxima do H1, 2 linhas; alto impacto. | `clamp(40px, 4vw, 64px)`, peso 750–800, entrelinha 1.02. |
| H2 de seção | Forte; `Trabalhos recentes`, `Agende seu horário`, `O que você aprende`. | `clamp(30px, 3vw, 48px)`, peso 700–800, entrelinha 1.05–1.12. |
| Título de bloco/card | Visível acima do corpo; serviços, grade informativa. | 22–28px, peso 650–750, entrelinha 1.15–1.25. |
| Pergunta do FAQ | Negrito, uma a duas linhas, à esquerda do sinal de estado. | 19–24px, peso 600–700, entrelinha 1.25–1.4. |
| Texto principal | Parágrafos relativamente grandes, linhas amplas, sem justificação. | 18–22px, peso 400–500, entrelinha 1.45–1.65. |
| Texto auxiliar | Legenda, observações de card, labels e rodapé. | 14–17px, entrelinha 1.35–1.5. |
| Botão/link | Texto encorpado; ação primária sempre clara. | 16–18px, peso 600–700; link secundário com sublinhado. |
| Navegação | Discreta, sem disputar atenção com o hero. | 14–16px, peso 500–650. |

**Hierarquia de conteúdo:** uma H1 por página; H2 para seção; H3 para serviço, bloco informativo, opção e pergunta, com marcação semântica ajustada à árvore real. No curso, `Goiânia` tem tamanho de destaque de seção dentro do cartão, sem tomar o papel da H1. Trechos em negrito no corpo introduzem uma tese e o restante da frase a desenvolve, como `Seu horário é só seu.` e `Resultado à vista.`. Há sublinhado decorativo breve em palavras iniciais de títulos da seção “Quem faz/Quem ensina”; use-o com parcimônia.

**Quebras de linha:** a H1 do agendamento resolve em três linhas; a do curso em duas; os CTAs finais em duas. A responsividade deve permitir quebra natural e preservar a ênfase sem codificar espaços ou tags `<br>` desnecessários.

**Tom da copy:** pessoal (`Jana`, `você`, `seu`), objetivo, com benefício tangível e ação específica. Página de serviço orienta para WhatsApp; curso para reserva/contato sobre vagas. Informações operacionais ainda não confirmadas permanecem como notas internas, nunca como promessa publicada.

## 5. Grid, margens, ritmo e composição

### 5.1 Desktop observado

- Em tela de 2048 px, a área útil das seções inicia visualmente por volta de **x = 350 px** e termina por volta de **x = 1660 px**, total aproximado de **1310 px**. A captura contém navegador; essas são medidas **de imagem**, não CSS. Reconstrução sugerida: contêiner `max-width: 1280–1360px`, com padding lateral fluido de 24–48px.
- Cabeçalho ocupa uma faixa compacta no topo. Seu conteúdo compartilha o alinhamento lateral do miolo. Marca à esquerda e navegação à direita.
- Hero e seções “serviço + seletor”, “sobre” e “quem ensina” usam **duas colunas** com gap amplo. Em geral, texto à esquerda e figura/card à direita; sobre/instrutora invertem figura à esquerda, texto à direita.
- Aberturas de seção são generosas: há espaço vazio entre conteúdo e divisória. O fundo colorido suporta a composição sem depender de cartões em todas as áreas.
- Galeria ocupa a largura central e mostra **seis arcos** em fila, alternando borda inferior/posição vertical para criar ritmo.
- A grade de quatro formatos do curso aparece em quatro colunas iguais; a lista de benefícios do curso aparece em duas colunas e duas linhas.
- FAQ reserva aproximadamente um terço para o título e dois terços para a lista. Divisórias são finas, suaves e com largura limitada à coluna das perguntas.
- Seções alternadas do curso usam mudança sutil `#4F0E2F` ↔ `#43092A` com corte horizontal reto e sem borda ornamental. CTA final mais escuro `#3A0823`.

### 5.2 Ritmo de espaçamento recomendado

Não é possível distinguir espaçamento CSS de escala de captura. Para uma reprodução coerente, usar uma escala base de **4/8 px** e testar visualmente: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128`. Padding vertical de seção em desktop em torno de **96–144 px**; espaço H2→descrição **24–32 px**; descrição→conteúdo **48–64 px**; gap entre colunas **64–96 px**; distância entre CTA primário e link secundário **24–32 px**. Esses números são especificação de implementação proposta, não medição exata do original.

### 5.3 Responsividade proposta, ainda não comprovada

- `≥1024px`: duas colunas nas seções narrativas, quatro formatos lado a lado, seis trabalhos em linha se houver largura real suficiente.
- `768–1023px`: reduzir gaps e títulos; galeria com rolagem horizontal ou grade 3 × 2; formatos 2 × 2; FAQ pode continuar 35/65 se legível.
- `<768px`: uma coluna com leitura hero→foto, texto→seletor, foto→bio; FAQ título sobre itens; cards de formato 2 × 2; CTA em largura confortável ou 100%; links secundários em nova linha; galeria horizontal com snap ou 2 colunas. No hero do curso, cartão da turma depois da chamada.
- Em qualquer largura: preservar arco da imagem, impedir sobreposição de texto, manter alvos interativos com ao menos ~44 × 44px e limitar comprimento de parágrafo a cerca de 55–75 caracteres quando possível.

## 6. Componentes detalhados

### 6.1 Cabeçalho e navegação entre páginas

Barra sem fundo contrastante, integrada ao tema. Wordmark em texto `Jana Esmalteria` à esquerda, compacto e negrito. Duas entradas textuais `Agendamento` e `Curso` alinhadas à direita e separadas por espaço generoso. A entrada ativa tem sublinhado curto/linha clara; **não** há pill de aba, ícone, menu suspenso ou linha contínua sob a navegação. Ao passar de uma página à outra, muda sobretudo a cor do fundo e a cor do texto, preservando a mesma arquitetura. Implementar como links de navegação com `aria-current="page"`, não como tabs ARIA se cada item leva a uma rota distinta. Estado hover/focus não consta nas capturas; adicionar foco visível coerente com rosa.

### 6.2 Botão primário

Fundo sólido `#FF4D8D`, texto `#2B0A1C`, formato cápsula (`border-radius: 999px`), sem sombra evidente ou ícone. Alinhamento central e padding lateral farto. Usos observados: `Agendar pelo WhatsApp`, `Garantir minha vaga`. No seletor e no cartão de turma, ocupa quase toda a largura interna; no hero/fechamento tem largura ajustada ao texto. Evitar caixa alta integral. Estados não mostrados: propor hover ligeiramente mais escuro, focus outline de alto contraste e disabled claramente distinto. Se o CTA abre WhatsApp, comunicar destino e preencher mensagem prévia com formato selecionado apenas após seleção consciente do usuário.

### 6.3 Link secundário e links de conteúdo

Texto sem caixa, peso médio/semibold, sublinhado fino em rosa `#FF4D8D`. No hero e fechamento fica ao lado do botão; links para Instagram aparecem no cabeçalho de galeria, bio e rodapé. `Ainda não sei, quero ajuda para escolher` dentro do seletor é uma alternativa funcional ao formato definido. O sublinhado é indicador persistente de clicabilidade; manter ao hover e reforçar foco visível.

### 6.4 Formato de arco / moldura fotográfica

Forma proprietária mais reconhecível: topo semicircular cheio e laterais verticais; base plana com cantos inferiores discretamente arredondados ou retos conforme componente. Usos: foto hero, detalhe sobreposto, retrato de Jana, galeria de trabalhos e placas de formatos do curso. Hero usa arco grande à direita e arco pequeno sobreposto na frente, levemente deslocado à esquerda, com contorno claro; placeholders usam rosa `#EDD0DA`. Fotos futuras precisam ocupar a moldura via `object-fit: cover`, foco em unhas/pessoa e `object-position` por imagem. Alt descritivo das fotografias; placeholders não devem virar texto alternativo definitivo. A silhueta não é uma obrigação para todos os cartões: o seletor e o ticket usam retângulos arredondados.

### 6.5 Galeria de trabalhos

Título e link no mesmo alinhamento horizontal; sequência de seis imagens em arcos uniformes com padrões alternados de alinhamento vertical. Cada uma recebe proporção retrato. Sem legendas, overlays de texto, bordas ou hover visíveis nas capturas; a palavra `TRABALHO n` é placeholder. Se fotos forem links, cada alvo deve ter nome acessível específico; se apenas exibição, usar imagens sem criar botões falsos. No mobile, uma grade/rolagem é **proposta**, não observada.

### 6.6 Lista de serviços

Três módulos empilhados com título em negrito, uma ou duas linhas descritivas e regra horizontal fina entre módulos. Não são cartões elevados. `Alongamento em gel`, `Manutenção`, `Pedicure em gel`. Trechos como duração média e intervalo indicado estão marcados em amarelo `[CONFIRMAR]`; não inventar esses valores. O layout alinha essa lista ao seletor da outra coluna.

### 6.7 Seletor interativo do agendamento

Painel branco quente `#FFFAF9`, cantos grandes (aparência ~28–36 px em CSS sugerido), sombra externa suave, composição vertical. Topo com silhueta de unha **tracejada** em rosa apagado; título `Seu formato aparece aqui`; instrução `Toque em uma das opções abaixo.`; subtítulo/pergunta `Qual formato você quer?`; grade 2 × 2 de botões `Quadrada`, `Amendoada`, `Bailarina`, `Stiletto`; link de ajuda; botão WhatsApp; microcopy final `A mensagem já vai com o formato escolhido.`. Cada opção tem fundo claro, contorno rosa fino, ícone rosa à esquerda, texto escuro. O estado inicial observado é **nenhuma opção escolhida**, com desenho tracejado. Um estado selecionado ou prévia real não foi mostrado: implementação recomendada troca a silhueta pela escolhida, marca a opção com borda/fundo perceptível e expõe `aria-pressed` ou usa radio group semântico. O link de ajuda precisa produzir um caminho de escolha, não simplesmente desaparecer.

### 6.8 Pictogramas de unhas

Quatro formas vetoriais simplificadas e preenchidas em rosa intenso: ponta reta (`Quadrada`), oval/afiada suave (`Amendoada`), laterais afuniladas com topo reto (`Bailarina`), ponta longa aguda (`Stiletto`). Traço branco/rosa claro pequeno deslocado à esquerda indica brilho. No curso são grandes e centradas em placas; no seletor são miniaturas. Recomenda-se um único conjunto SVG escalável, preservando geometria consistente. Não há evidência de biblioteca externa de ícones.

### 6.9 Placas em arco da seção “aprende”

Quatro cards `#57153A` sobre `#43092A`; topo arqueado, base reta, altura uniforme, espaçamento constante. Ícone rosa central grande e legenda branca centrada abaixo. São cards **informativos** no curso; não há evidência de que sejam clicáveis. A mesma iconografia migra para os controles do formulário na página de agendamento.

### 6.10 Cartão/ticket da próxima turma

Card claro no hero vinho, com grandes cantos arredondados. Label `Próxima turma`, cidade `Goiânia` muito grande e `GO` menor na mesma linha. Divisória, quatro linhas de pares rótulo/valor (`Data`, `Local`, `Duração`, `Investimento`), cada uma separada por regra. Seção inferior separada por **linha horizontal tracejada**, com dois recortes circulares laterais na altura do picote para simular ingresso; CTA interno de largura quase completa. Sombra baixa. Dados mostram `[CONFIRMAR]` e não devem ser publicados assim. O nome da cidade no CTA final deriva desta turma específica; para outras cidades, deve vir da mesma fonte de dados.

### 6.11 Blocos informativos do curso

Matriz 2 × 2 distribuída em duas colunas. Módulos começam com linha fina e título em negrito; corpo simples. `O que está incluso` usa lista com pequenos marcadores verticais rosa arredondados; os outros módulos usam parágrafo. Conteúdo observado: prática presencial, acesso ao curso online e itens pendentes de confirmação (certificado, material/kit, prática em modelo ou própria mão, duração do acesso, público alvo). Não converter itens incertos em garantias.

### 6.12 Blocos de apresentação pessoal

Agendamento: foto de Jana em estúdio à esquerda, chamada `Quem faz suas unhas é a Jana`, texto e três itens de prova/benefício à direita. Curso: foto dela dando aula à esquerda, chamada `Quem ensina é a Jana`, apresentação, trajetória a confirmar e link para trabalhos. Mesma construção de arco com narrativas distintas. Na página de atendimento, bullets em rosa separam os três argumentos; no curso, o link tem sublinhado rosa. Foto e credenciais devem corresponder ao contexto de cada aba.

### 6.13 Acordeões de FAQ

Componente sem caixa preenchida: cada pergunta forma uma linha com texto à esquerda e sinal `+` rosa à direita; quando expandida, sinal muda para `−` e uma resposta surge logo abaixo, antes da próxima divisória. A primeira pergunta aparece aberta nas duas páginas. Separadores de baixa opacidade ocupam só a coluna do FAQ. Na aba clara, texto escuro; na escura, texto claro. Itens do agendamento: duração do alongamento, local, pagamentos, manutenção feita em outro lugar. Itens do curso: exigência de experiência, material, acesso online, parcelamento e futuras turmas. Implementar botão real com `aria-expanded`, `aria-controls`, resposta associada, teclado Enter/Espaço e foco visível. As imagens mostram uma resposta aberta e outras fechadas; **não provam** se múltiplas perguntas podem ficar abertas simultaneamente, se há animação ou persistência de estado. Decidir essas regras em produto, não atribuí-las à referência.

### 6.14 Fechamento e rodapé

Faixa escura separada do bloco anterior por mudança de fundo, padding vertical generoso e título muito grande. CTAs lado a lado. Depois uma regra fina, seguida por três regiões: `Jana Esmalteria`; localização/descrição ou link `Agendar um horário`; perfil `@esmalteriadajana_jp`. No agendamento, aparece `[CONFIRMAR: endereço]` após João Pessoa/PB; no curso, a informação principal do rodapé é atendimento em João Pessoa/PB, **não o local da turma**. Manter essa distinção para não confundir local do estúdio e local do curso. Não há ícones sociais nem formulário de newsletter visíveis.

## 7. Bordas, sombras, divisórias, vetores e efeitos

- **Bordas:** poucas; opção selecionável com contorno rosa claro fino, divisórias com 1px visual. Não há contorno em cards de fotos.
- **Raios:** botões totalmente arredondados; painel e ticket com cantos generosos; arcos fotográficos combinam semicircunferência superior e base reta. Não uniformizar todos os raios.
- **Sombras:** apenas nos cards claros flutuantes (painel seletor e ticket), difusas, de baixa opacidade; seções e placas do curso se distinguem por cor, não por elevação.
- **Linhas:** regras discretas entre serviços, dados do ticket, FAQs, grade informativa e rodapé; picote no ticket é uma exceção expressiva.
- **Vetores:** unhas geométricas; unha tracejada de prévia; sinais finos de `+`/`−`; pequenos marcadores em pílula. Não há ilustrações figurativas complexas ou foto real nas capturas.
- **Textura e movimento:** fundos planos e limpos. Nenhuma textura, gradiente, vídeo, transição ou animação pode ser afirmada a partir das capturas.

## 8. Estados, lógica de navegação e destino dos CTAs

| Ação/estado | Evidência visível | Comportamento de implementação recomendado |
|---|---|---|
| Menu `Agendamento` / `Curso` | Páginas distintas, tema claro/escuro, item ativo sinalizado. | Navegar para rota/âncora de página específica e atualizar `aria-current`. |
| Seletor de formato | Estado vazio e quatro controles visíveis. | Seleção única; atualizar prévia, estado e mensagem do WhatsApp. |
| Ajuda para escolher | Link textual abaixo das opções. | Abrir orientação objetiva ou WhatsApp com pedido de aconselhamento. |
| FAQ | Primeira pergunta aberta, demais fechadas; sinais `−` / `+`. | Alternância acessível, sem assumir estado múltiplo a partir da imagem. |
| CTA de agendamento | Repete no hero, painel e final. | Mesmo fluxo de contato/WhatsApp; incluir contexto do formato se houver. |
| CTA de curso | Repete no hero, ticket e final. | Mesmo fluxo para a turma ativa, com cidade/edição coerente. |
| `Quero turma na minha cidade` | CTA secundário no fechamento do curso. | Fluxo distinto de lista de interesse; não presumir reserva em Goiânia. |
| Links de Instagram | Galeria, apresentação e rodapé. | Perfil consistente `@esmalteriadajana_jp`, destino externo verificado. |

## 9. Conteúdo pendente e integridade editorial

O amarelo `#FFE08B` acompanha notas como `[CONFIRMAR]`: **não é badge de benefício, preço, urgência, selo ou highlight de marca**. Pendências visualmente identificadas:

- Agendamento: tempo médio do alongamento; intervalo de manutenção; trajetória/tempo de experiência de Jana; confirmação ligada ao link `Ver o curso`; prazo indicado para manutenção na FAQ; endereço no rodapé.
- Curso: conteúdo programático e formatos ensinados; data, local, duração e investimento de Goiânia; prática em modelo ou própria mão; tempo de acesso online; certificado; material/kit; público alvo; trajetória, experiência, turmas/cidades anteriores; resposta sobre necessidade de experiência. As demais respostas de FAQ não aparecem abertas e também exigem redação/conferência.
- Assets: imagem principal da mão, detalhe da unha, seis fotos de trabalhos, retrato no estúdio e retrato dando aula. Os blocos mostram rótulos de foto temporários, não fotografias finais.

Antes de publicar, validar fatos, benefícios e destinos dos botões. Remover por inteiro o marcador amarelo e o texto `[CONFIRMAR...]`, substituindo por informação aprovada ou ocultando o bloco quando necessário. Verificar coerência do nome da cidade em ticket, H1/CTA final e WhatsApp.

## 10. Arquitetura de componentes sugerida

```text
SiteShell
├── Header (brand, links Agendamento/Curso, estado ativo)
├── AgendamentoPage [tema claro]
│   ├── SplitHero (texto, CTAs, arcos fotográficos)
│   ├── WorkGallery (6 arcos, link Instagram)
│   ├── ServiceAndShapeSelector (lista, preview, opções, WhatsApp)
│   ├── AboutJana (foto, bio, benefícios)
│   ├── FAQ (4 itens)
│   └── ClosingCTAAndFooter
└── CursoPage [tema vinho]
    ├── SplitHero (texto, CTA, UpcomingClassTicket)
    ├── ShapeCurriculum (4 placas em arco)
    ├── DeliveryAndInclusions (matriz 2 × 2)
    ├── Instructor (foto, credenciais, Instagram)
    ├── FAQ (5 itens)
    └── ClosingCTAAndFooter
```

### 10.1 Tokens CSS iniciais, explicitamente de reconstrução

```css
:root {
  --ink: #2b0a1c;
  --blush-bg: #f4e1e7;
  --blush-panel: #edd0da;
  --wine: #4f0e2f;
  --wine-deep: #43092a;
  --wine-footer: #3a0823;
  --wine-card: #57153a;
  --hot-pink: #ff4d8d;
  --cream-white: #fbf0f2;
  --card-white: #fffaf9;
  --review-marker: #ffe08b; /* somente revisão editorial */

  --container: 82rem;      /* proposta; conferir com viewport/CSS reais */
  --space-section: clamp(5rem, 8vw, 9rem);
  --radius-pill: 999px;
  --radius-panel: 2rem;
}

.page--agendamento { background: var(--blush-bg); color: var(--ink); }
.page--curso { background: var(--wine); color: var(--cream-white); }
.button--primary { background: var(--hot-pink); color: var(--ink); border-radius: var(--radius-pill); }
.section--course-alt { background: var(--wine-deep); }
.section--closing { background: var(--wine-footer); color: var(--cream-white); }
```

Os nomes de tokens são propostos para organizar a implementação. A fidelidade da fonte exata e dos tamanhos exige inspeção do projeto original, DevTools ou arquivos CSS; **não inferir precisão inexistente**.

## 11. Qualidade, acessibilidade e decisões pendentes

1. **Semântica:** navegação por links de páginas; H1 única por rota; títulos em ordem; acordeões por botões, não `div` clicável; seleção de formato por radio group ou botões de seleção única.
2. **Contraste:** combinação principal muito legível; texto escuro obrigatório no botão rosa; revisar textos secundários rosas/apagados em tamanho pequeno e bordas de opção.
3. **Foco/teclado:** foco visual em menu, CTA, links, seletor e FAQ; Escape apenas se houver modal de ajuda (modal não observado).
4. **Alternativas de imagem:** descrição funcional de trabalhos reais e Jana, conforme contexto; imagens decorativas de arco com `alt=""`; não expor rótulos `FOTO HERO` como conteúdo final.
5. **Destinos e promessas:** confirmar número/URL WhatsApp, perfil Instagram, cidade, endereço e dados de turma; evitar que o CTA da turma prometa disponibilidade não verificada.
6. **Responsividade e estados:** referências não mostram mobile, hover, loading, sucesso, erro, menu mobile nem seleção do formato; desenvolver e testar esses estados mantendo os tokens e a hierarquia observados.
7. **Fidelidade das imagens:** usar fotografia real no arco com enquadramento coerente; evitar substituir automaticamente por gradientes, emojis, textura vintage, ícones genéricos ou mockups de telefone, ausentes do design.

## 12. Síntese para execução

Para reproduzir o sistema, priorizar: **(1)** duas rotas com o mesmo header e temas próprios; **(2)** tipografia sans pesada com escala bem contrastada; **(3)** contêiner central largo e seções com muito respiro; **(4)** arcos fotográficos, pictogramas rosa e ticket recortado; **(5)** CTA rosa de texto escuro e links sublinhados; **(6)** FAQ de linhas finas; **(7)** substituição de cada placeholder por material real e aprovado. A mudança rosa→vinho entre páginas comunica a separação entre **agendar um atendimento** e **comprar/solicitar vaga no curso**; o vinho do fechamento na página rosa continua sendo apenas o seu CTA final.
