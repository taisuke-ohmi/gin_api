package user

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type User struct {
	Name     string `form:"name" binding:"required"`
	Password string `form:"password" binding:"required"`
}

func UserCreate(c *gin.Context) {
	var user User

	if err := c.ShouldBind(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	name := c.PostForm("name")
	password := c.PostForm("password")
	c.JSON(http.StatusOK, gin.H{
		"name":     name,
		"password": password,
	})
}
