const quotes = [
    {
      text: "Code is poetry written for machines, but read by humans.",
      author: "Alex Singh",
    },
    {
      text: "The best code is the code that solves problems elegantly and efficiently.",
      author: "Unknown",
    },
    {
      text: "In programming, the hard part isn't solving the problem once, but solving it in a way that's maintainable.",
      author: "Alex Singh",
    },
  ]
  
  export default function Quotes() {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-balance">Thoughts & Inspiration</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="border border-muted rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                <p className="text-lg italic text-muted-foreground mb-4">"{quote.text}"</p>
                <p className="text-sm text-blue-400 font-medium">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  