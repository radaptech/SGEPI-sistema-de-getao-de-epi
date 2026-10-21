package auth

import (
	"crypto/rand"
	"crypto/sha256"
	"encoding/hex"
	"time"
)

const (
	CookieSessao  = "sessao"
	DuracaoSessao = 24 * time.Hour
)

// GerarTokenSessao devolve o token que vai no cookie e o hash que vai pro banco.
func GerarTokenSessao() (token, hash string) {
	token = rand.Text()
	return token, HashTokenSessao(token)
}

func HashTokenSessao(token string) string {
	soma := sha256.Sum256([]byte(token))
	return hex.EncodeToString(soma[:])
}
