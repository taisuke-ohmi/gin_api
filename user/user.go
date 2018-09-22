package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func UserCreate(c *gin.Context) {
	name := c.PostForm("name")
	c.JSON(http.StatusOK, gin.H{
		"name": name,
	})
}
