'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { topics } from '@/public/data/prompt'
import { useToast } from "@/hooks/use-toast"


export default function Home() {
  const [activeTab, setActiveTab] = useState('Ratting')
  const { toast } = useToast()
  const [inputs, setInputs] = useState(['', ''])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editableResult, setEditableResult] = useState('')

  const combineStrings = () => {
    const topic = topics.find(t => t.name === activeTab)
    if (!topic) return

    let combined = topic.template
    inputs.forEach((input, index) => {
      combined = combined.replace(`{input${index + 1}}`, input)
    })
    setEditableResult(combined)
    setIsModalOpen(true)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(editableResult)
      toast({
        title: "Copied to clipboard",
        description: "The result has been copied to your clipboard.",
      })
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-center">String Combiner</h1>
        <Tabs defaultValue="Ratting" onValueChange={(value) => {
          setActiveTab(value)
          setInputs(['', ''])
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
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[90vw] h-[90vh] flex flex-col gap-2 justify-between">
            <h1 className='font-bold'>Result</h1>
            <Textarea
              value={editableResult}
              onChange={(e) => setEditableResult(e.target.value)}
              className="flex-1 text-sm"
            />
            <div className='flex gap-2 w-full '>
              <Button
                className='w-full'
                onClick={() => setIsModalOpen(false)}>Close</Button>
              <Button
                variant="outline"
                className='w-full'
                onClick={copyToClipboard}
              >
                Copy
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
}

