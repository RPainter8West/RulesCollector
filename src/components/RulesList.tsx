import { useQuery } from "@tanstack/react-query";
import type { RulesResponse } from "../routes/api/rules";

export default function RulesList() {
  
  // Fetch rules using TANStack Query
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["rules"],
    queryFn: async () => {
      const response = await fetch("/api/rules");
      if (!response.ok) {
        throw new Error("Failed to fetch rules");
      }
      return response.json() as Promise<RulesResponse>;
    }
  });

  // Show loading state
  if (isLoading) {
    return <div className="flex justify-center my-8">Loading rules...</div>;
  }

  // Show error state
  if (isError) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4" role="alert">
        <p className="font-bold">Error</p>
        <p>{error instanceof Error ? error.message : "Unknown error occurred"}</p>
      </div>
    );
  }

  // Render the rules
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Rules Collection</h1>
      
      {data?.rules.length === 0 ? (
        <p className="text-gray-500">No rules found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.rules.map((rule) => (
            <div 
              key={rule.id} 
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold">{rule.name}</h2>
                <span 
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    rule.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {rule.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mt-2">
                {rule.description || 'No description provided.'}
              </p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
                  {rule.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-100 text-purple-800">
                  By: {rule.author}
                </span>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                Created: {new Date(rule.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
