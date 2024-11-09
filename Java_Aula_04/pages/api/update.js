// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const {id, title, image, description, ranking, origin} = JSON.parse(req.body)
    console.log({id, title, image, description, ranking, origin})
    const request = await fetch(`${process.env.SERVER_IP  || "http://localhost:8080"}/update/${id}`,{
        headers:{
            "Content-Type": "application/json",
            "X-Custom-Header": "ProcessThisImmediately",
          },
        method: "PUT",
        body: JSON.stringify(
            {title, image, description, ranking, origin}
        )
      }
    )
    res.status(200).json(await request.json())
  }
  