-- Sessões de login (substitui o JWT). O cookie leva um token aleatório;
-- aqui fica só o SHA-256 dele, então um vazamento do banco não entrega sessões válidas.
CREATE TABLE sessoes (
    token_hash TEXT PRIMARY KEY,
    usuario_id INT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    expira_em TIMESTAMPTZ NOT NULL,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_sessoes_usuario ON sessoes (usuario_id);
