import { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export function RichText({ value, onChange, placeholder }: any) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<any>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative">
      <ReactQuill
        theme="snow"
        value={value}
        ref={ref}
        onChange={onChange}
        placeholder={placeholder}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean']
          ]
        }}
        className="bg-background dark:bg-foreground/20 transition-colors group h-64 pb-11 rounded-2xl"
      />
    </div>
  )
}
