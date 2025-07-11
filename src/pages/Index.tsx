
import React, { useState } from 'react';
import Header from '@/components/Header';
import QueryInput from '@/components/QueryInput';
import SparqlDisplay from '@/components/SparqlDisplay';
import ResultView from '@/components/ResultView';
import ApiKeyInput from '@/components/ApiKeyInput';
import { generateSparqlQuery, executeSparqlQuery, interpretResults } from '@/utils/mockApi';
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const IndexPage = () => {
  const { toast } = useToast();
  const [naturalLanguageQuery, setNaturalLanguageQuery] = useState('');
  const [isGeneratingSparql, setIsGeneratingSparql] = useState(false);
  const [sparqlQuery, setSparqlQuery] = useState('');
  const [isRunningQuery, setIsRunningQuery] = useState(false);
  const [queryResults, setQueryResults] = useState<any | null>(null);
  const [resultInterpretation, setResultInterpretation] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);

  // Handle query submission
  const handleQuerySubmit = async (query: string) => {
    setNaturalLanguageQuery(query);
    setIsGeneratingSparql(true);
    setSparqlQuery('');
    setShowResults(false);
    setQueryResults(null);
    setResultInterpretation('');
    setQueryError(null);
    
    try {
      const generatedQuery = await generateSparqlQuery(query);
      setSparqlQuery(generatedQuery);
      toast({
        title: "SPARQL Generated",
        description: "Your natural language query has been translated to SPARQL.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate SPARQL query. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
      console.error("Error generating SPARQL:", error);
    } finally {
      setIsGeneratingSparql(false);
    }
  };

  // Handle running the SPARQL query
  const handleRunQuery = async () => {
    if (!sparqlQuery || isRunningQuery) return;
    
    setIsRunningQuery(true);
    setShowResults(false);
    setQueryError(null);
    
    try {
      // Execute the query
      const results = await executeSparqlQuery(sparqlQuery);
      setQueryResults(results);
      
      // Get LLM interpretation
      const interpretation = await interpretResults(results, naturalLanguageQuery);
      setResultInterpretation(interpretation);
      
      // Show results
      setShowResults(true);
      
      toast({
        title: "Query Executed",
        description: "SPARQL query executed successfully with results.",
        duration: 3000,
      });
    } catch (error) {
      setQueryError(error instanceof Error ? error.message : String(error));
      toast({
        title: "Query Failed",
        description: "Failed to execute SPARQL query. See error details.",
        variant: "destructive",
        duration: 3000,
      });
      console.error("Error executing SPARQL:", error);
    } finally {
      setIsRunningQuery(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <ApiKeyInput />
          
          <QueryInput 
            onSubmit={handleQuerySubmit} 
            isProcessing={isGeneratingSparql} 
          />
          
          {(sparqlQuery || isGeneratingSparql) && (
            <SparqlDisplay 
              sparqlQuery={sparqlQuery}
              isGenerating={isGeneratingSparql}
              onRunQuery={handleRunQuery}
              isRunning={isRunningQuery}
              className="mt-8"
            />
          )}
          
          {queryError && (
            <Alert variant="destructive" className="mt-6">
              <AlertTitle>Query Execution Error</AlertTitle>
              <AlertDescription className="mt-2 whitespace-pre-wrap font-mono text-xs">
                {queryError}
              </AlertDescription>
            </Alert>
          )}
          
          <ResultView 
            results={queryResults}
            interpretation={resultInterpretation}
            isVisible={showResults}
            className="mt-8"
          />
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
