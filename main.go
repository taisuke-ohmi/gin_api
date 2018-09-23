package main

import (
	"gin_api/user"
	"io"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	f, _ := os.Create("gin.log")
	gin.DefaultWriter = io.MultiWriter(f)

	r := gin.Default()
	r.LoadHTMLGlob("templates/*")

	authorized := r.Group("/admin", gin.BasicAuth(gin.Accounts{
		"foo": "bar",
	}))

	r.GET("/", Index)
	authorized.GET("/hello", Hello)
	r.POST("/user/create", user.UserCreate)
	r.Static("/assets", "./assets")

	r.Run()
}

func Index(c *gin.Context) {
	c.HTML(http.StatusOK, "index.tmpl", gin.H{
		"title": "This is gin app.",
	})
}

func Hello(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "hello world",
	})
}
