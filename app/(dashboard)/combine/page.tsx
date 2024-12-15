import FormPrompt from "@/components/form-prompt";

export default function PromptCombine() {
  return (
    <div className="flex flex-1 gap-4 p-4 pt-0">
      <div className="flex-1 flex items-center justify-center rounded-xl bg-muted">
        <FormPrompt />
      </div>
      <div className="flex-1 flex items-center justify-center rounded-xl bg-muted">
        <div className="flex flex-col gap-4 w-full max-h-[80vh] overflow-y-auto p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="aspect-video rounded-xl bg-black" />
          ))}
        </div>
      </div>
    </div>
  )
}
