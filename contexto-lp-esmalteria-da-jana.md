# Contexto para desenvolvimento da nova Landing Page — Esmalteria da Jana / Janaína Melo

> Documento de referência interno (dev). Base: análise do site atual `esmalteriadajana.com.br` em 27/09/2026.

## 1. Resumo do que o site atual apresenta

O site atual **não é** um site de esmalteria com agendamento. Ele é, hoje, inteiramente uma **página de venda de cursos e mentoria** para profissionais da área de unhas (uma "Nails Academy"). Todo o conteúdo gira em torno de ensinar a técnica **Molde F1** para manicures e nail designers aumentarem faturamento.

Estrutura de seções observada:

1. **Hero** — "Elegância e Precisão / Revolucione sua carreira", com promessa de dominar as técnicas de Molde F1 que transformam o faturamento de especialistas. CTAs: "Academia Online" e "Consultoria".
2. **Faixa de benefícios em destaque** (marquee): Aprenda do Zero, Aperfeiçoamento, Técnicas Russas, Certificado, Suporte VIP, Material Prático, Foco em Lucro, Acesso Imediato, Consultoria.
3. **Diagnóstico / segmentação** — "Qual seu nível hoje?" com três caminhos: Iniciante, Já atuo na área, Quero me aperfeiçoar.
4. **A técnica (O que é o Molde F1?)** — técnica moderna de alongamento de unhas. Quatro pilares: Resultado Natural, Agilidade Incrível, Alta Durabilidade, Mais Dinheiro.
5. **Lista de cursos** — 2 cursos, acesso 100% vitalício:
   - **Molde F1 Expert** — unhas perfeitas na metade do tempo, atender mais clientes com acabamento impecável.
   - **Unhas Softgel** — unha pronta em minutos, visual natural, técnica mais fácil e rápida para quem está começando.
6. **A mentora — Janaína Melo** — "Experiência real, ensino com amor". Missão: ajudar a crescer na profissão, ganhar mais dinheiro e ter mais tempo livre. Destaques: Rapidez em Mesa (mesa 2x mais rápida) e Acabamento Fino (nível europeu).
7. **Depoimentos (Histórias de Sucesso)** — Amanda Silva (Nail Designer), Beatriz Costa (Manicure), Carla Oliveira (Empreendedora).
8. **CTA final** — "Domine a técnica": "Garantir minha vaga" e "Falar com a mentora".
9. **Rodapé** — menu (Início, Cursos, Teste, Contato), localização João Pessoa - PB, telefone, links de Privacidade e Termos.

## 2. Quem é a Jana

- **Nome / porta-voz:** Janaína Melo (usar exatamente assim).
- **Posicionamento:** mentora e especialista em unhas; criadora/professora da técnica **Molde F1**.
- **Tom da marca:** "Redefinindo a beleza através da precisão e experiência." Discurso de elegância, precisão, sofisticação e foco em lucro para a profissional.
- **Localização:** João Pessoa - PB.
- **Contato exibido no site:** +55 83 99645-2065.
- **Instagram (do cadastro do cliente):** @esmalteriadajana_jp.

## 3. O que ela vende

**Hoje, no site:** produtos de educação/formação para profissionais de unhas.

- **Molde F1 Expert** (curso principal) — técnica de alongamento; foco em rapidez e acabamento premium.
- **Unhas Softgel** (curso de entrada) — técnica rápida e fácil para iniciantes.
- **Consultoria / Mentoria** — acompanhamento individual.
- Ganchos de oferta: acesso vitalício, certificado, suporte VIP, material prático, acesso imediato, técnicas russas.

**Serviço de esmalteria (atendimento a clientes finais):** não aparece no site atual. Pela referência do cliente, existe também a operação de esmalteria com atendimento a clientes finais, mas não há, nesta página, nenhuma seção de agendamento nem localização física do salão. Os valores de serviços e de cursos estão consolidados abaixo.

## 3.1 Tabela de valores dos cursos

| Turma | Valor total | Inscrição | Restante |
|---|---|---|---|
| Goiana - PE | R$ 300,00 | R$ 80,00 | Semanal até quitar o débito |
| Santa Cruz | R$ 300,00 | R$ 80,00 | Semanal até quitar o débito |
| João Pessoa - PB | R$ 397,00 | R$ 97,00 | Semanal até quitar o débito |

## 3.2 Tabela de valores dos serviços

| Serviço | Valor |
|---|---|
| Aplicação | R$ 100,00 |
| Manutenção | R$ 90,00 |
| Esmaltação em gel | R$ 60,00 |
| Banho de gel | R$ 80,00 |
| Pedicure em gel | R$ 50,00 |

## 4. Identidade visual observada (para manter consistência na nova LP)

- **Fundo:** off-white / creme claro, aprox. `#F5F1EA`.
- **Texto de destaque (display):** preto, aprox. `#1A1A1A`, sans-serif pesado em caixa alta.
- **Cor de marca / acento:** dourado, aprox. `#C09B5C`, aplicada em serifada itálica (contraponto sofisticado ao sans-serif preto).
- **Botões:** primário em bloco preto sólido com texto branco; secundário com borda fina.
- **Estilo geral:** minimalista, luxuoso, muito espaço em branco, tipografia como elemento principal.
- **Elementos de apoio:** faixa de texto em movimento (marquee) com palavras-chave; numeração de seções (01, 02...).

> Observação: os hexadecimais acima são aproximações extraídas da leitura visual da página. Confirmar os valores exatos no tema/CSS do site antes de fechar a paleta da nova LP.

## 5. Ponto de atenção antes de executar (inconsistência)

O pedido é uma LP para **(a) agendamento dos serviços da esmalteria** e **(b) promoção do curso**. O site atual só cobre o **(b) curso**. Para a parte de agendamento não há material de origem nesta página. Antes de montar a LP, precisamos definir:

- **Público e objetivo:** uma única LP para os dois públicos (cliente final que quer agendar + profissional que quer o curso), ou duas LPs separadas? São jornadas e ofertas diferentes; misturar pode reduzir conversão.
- **Serviços da esmalteria:** lista de serviços, preços/faixas, duração e diferenciais para a seção de agendamento.
- **Canal de agendamento:** WhatsApp, ferramenta de agenda online, formulário? Definir o destino do CTA.
- **Endereço físico do salão** (para clientes finais) e horário de funcionamento.
- **Nomes exatos** de marca/cursos a manter: "Molde F1", "Molde F1 Expert", "Unhas Softgel", "Janaína Melo". Confirmar se a esmalteria usa "Esmalteria da Jana" como nome público na LP.
- **Provas/depoimentos** específicos de clientes da esmalteria (os atuais são de alunas do curso).

## 6. Blocos sugeridos para a nova LP (rascunho de estrutura)

Assumindo LP única com dois caminhos claros:

1. Hero com escolha de intenção: "Quero agendar meu horário" x "Quero aprender a técnica".
2. **Trilha esmalteria (agendamento):** serviços, diferenciais (resultado natural, durabilidade, agilidade), fotos de trabalhos, CTA de agendamento (WhatsApp/agenda).
3. **Trilha curso (promoção):** o que é o Molde F1, cursos (Expert e Softgel), benefícios (vitalício, certificado, suporte VIP), mentora Janaína Melo, depoimentos, CTA "Garantir minha vaga".
4. Rodapé com contato, localização e redes.

*(Estrutura sujeita às definições do item 5.)*
