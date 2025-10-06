import { client } from "@/sanity/lib/client";

export default async function GlossaryPage() {
    const glossaryItems = await client.fetch(`
    *[_type == "glossary"] | order(term asc){
      _id,
      term,
      definition
    }
  `);

    return (
        <main className="max-w-5xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold mb-12">Travel Glossary</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {glossaryItems.map((item: any) => (
                    <div key={item._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold mb-2">{item.term}</h2>
                        <p className="text-gray-600">{item.definition}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
