-- name: CriarSessao :exec
INSERT INTO sessoes (token_hash, usuario_id, expira_em)
VALUES ($1, $2, $3);

-- name: BuscarSessao :one
-- Só devolve sessão válida de usuário ativo: desativar o usuário derruba a sessão na hora.
SELECT u.id, u.tenant_id, u.nome, u.role
FROM sessoes s
INNER JOIN usuarios u ON u.id = s.usuario_id
WHERE s.token_hash = $1
  AND s.expira_em > now()
  AND u.ativo = TRUE
LIMIT 1;

-- name: DeletarSessao :exec
DELETE FROM sessoes WHERE token_hash = $1;

-- name: DeletarSessoesExpiradas :exec
DELETE FROM sessoes WHERE expira_em <= now();
