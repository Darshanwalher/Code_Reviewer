import React, { useEffect, useState } from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from "axios"

const App = () => {

  const [code, setCode] = useState(`function add(a, b) {
  return a + b;
}`)

  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    try {
      setLoading(true)
      setReview("")

      const response = await axios.post(
        "http://localhost:3000/ai/get-response",
        { code }
      )

      setReview(response.data)

    } catch (error) {
      console.error("Error reviewing code:", error)
      setReview("❌ Something went wrong while reviewing the code.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={12}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 15,
              backgroundColor: "transparent",
              minHeight: "100%",
              color:"white",
              outline: "none"
            }}
          />
        </div>

        <button onClick={reviewCode} className="review">
          {loading ? "Analyzing..." : "Review"}
        </button>
      </div>

      <div className="right">
        {loading ? (
          <div className="thinking">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>AI is analyzing your code...</p>
          </div>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
        )}
      </div>
    </main>
  )
}

export default App
