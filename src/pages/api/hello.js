
export default function handler(req, res) {
  if (req.method === 'GET') {
    getSongs()
      .then(response => res.json(response))
  } 
  else if  (req.method === 'POST') {
    res.send('post works')
  }
}
