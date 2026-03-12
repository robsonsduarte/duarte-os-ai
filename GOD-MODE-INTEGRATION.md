# God Mode Integration

Esta integracao adiciona o template `aios-god-mode-template` ao AIOX local como camada de skills.

Arquivos esperados:
- `.claude/skills/aiox-god-mode/` -> skill principal
- `.claude/skills/aios-god-mode/` -> redirect legado
- `.claude/skills/find-skills/` -> skill auxiliar de descoberta

Escopo:
- adiciona comandos e referencias de criacao/configuracao/orquestracao
- preserva compatibilidade com prompts legados `aios-god-mode`
- nao sobrescreve `settings.json` nem regras ja existentes do AIOX

Racional:
- o template e um pack de UX operacional, nao um substituto do core
- portanto ele deve viver como extensao local de skills
