// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const {title, image, description, ranking, origin} = JSON.parse(req.body)
    console.log({title, image, description, ranking, origin})
    const request = await fetch(`${process.env.SERVER_IP || "http://localhost:8080"}/add`,{
        headers:{
            "Content-Type": "application/json",
            "X-Custom-Header": "ProcessThisImmediately",
          },
        method: "POST",
        body: JSON.stringify(
            {title, image, description, ranking, origin}
        )
      }
    )
    res.status(200).json(await request.json())
  }
  