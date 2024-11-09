// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const {id} = req.query
    console.log(id)
    const request = await fetch(`${process.env.SERVER_IP  || "http://localhost:8080"}/delete/${id}`,{
        headers:{
            "Content-Type": "application/json",
            "X-Custom-Header": "ProcessThisImmediately",
          },
        method: "DELETE"
      }
    )
    console.log(request)
    res.status(200).json(req.statusText)
  }
  