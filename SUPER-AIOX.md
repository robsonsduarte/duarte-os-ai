# Super AIOX

Este pack transforma o AIOX local em um "super AIOX" por composicao, sem reescrever o core.

Capacidades incorporadas:
- `aiox-core`: orquestracao, boundary control, multi-IDE e squads
- `mega-brain`: knowledge OS, conclave, DNA extraction, playbooks
- `duarteos-core-ai`: OMEGA, Process Chief, MMOS, ingestao e gates de processo

Estrutura adicionada:
- `knowledge/` -> base de conhecimento do sistema
- `artifacts/` -> material intermediario e derivados
- `inbox/` -> entrada local de materiais
- `workspace/` -> dossies, briefs e memoria de projeto
- `distribution/` -> camadas community/pro/private
- `squads/knowledge-os/` -> squad que unifica essas camadas

Principio de integracao:
- nao substituir o que o AIOX ja faz bem
- importar apenas o que adiciona capacidade nova
- preservar provenance em `squads/knowledge-os/imports/`

Mapa rapido:
- `squads/knowledge-os/imports/mega-brain/` -> workflows, tasks e assets selecionados
- `squads/knowledge-os/imports/duarteos/` -> protocolos e process cards selecionados
- `squads/knowledge-os/workflows/super-aiox-knowledge-loop.yaml` -> workflow mestre do pack
