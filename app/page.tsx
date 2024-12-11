'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const topics = [
  {
    name: 'Weather',
    template: 'thời tiết tại {input1} vào lúc {input2} là như thế nào',
    placeholders: ['Enter location', 'Enter time']
  },
  {
    name: 'Personal Info',
    template: 'tên của bạn là {input1} và bạn sinh năm {input2}',
    placeholders: ['Enter name', 'Enter birth year']
  },
  {
    name: 'Description',
    template: '{input1} là một người {input2}',
    placeholders: ['Enter name', 'Enter description']
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Weather')
  const [inputs, setInputs] = useState(['', ''])
  const [result, setResult] = useState('')

  const combineStrings = () => {
    const topic = topics.find(t => t.name === activeTab)
    if (!topic) return

    let combined = topic.template
    inputs.forEach((input, index) => {
      combined = combined.replace(`{input${index + 1}}`, input)
    })
    setResult(combined)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result)
      toast.success('Copied to clipboard!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } catch {
      toast.error('Failed to copy text', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">String Combiner</h1>
        <Tabs defaultValue="Weather" onValueChange={(value) => {
          setActiveTab(value)
          setInputs(['', ''])
          setResult('')
        }}>
          <TabsList className="grid w-full grid-cols-3">
            {topics.map((topic) => (
              <TabsTrigger key={topic.name} value={topic.name}>
                {topic.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {topics.map((topic) => (
            <TabsContent key={topic.name} value={topic.name}>
              {topic.placeholders.map((placeholder, index) => (
                <Textarea
                  key={index}
                  placeholder={placeholder}
                  value={inputs[index]}
                  onChange={(e) => {
                    const newInputs = [...inputs]
                    newInputs[index] = e.target.value
                    setInputs(newInputs)
                  }}
                  className="mb-4"
                />
              ))}
            </TabsContent>
          ))}
        </Tabs>
        <Button onClick={combineStrings} className="w-full">
          Combine
        </Button>
        {result && (
          <Button
            className="mt-4 p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={copyToClipboard}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                copyToClipboard()
              }
            }}
          >
            <h2 className="font-semibold mb-2">Result (Click to copy):</h2>
            <p>{result}</p>
          </Button>
        )}
      </div>
      <ToastContainer />
    </main>
  )
}
