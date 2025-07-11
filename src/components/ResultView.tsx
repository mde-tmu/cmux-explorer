
import React from 'react';
import GlassCard from './GlassCard';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ResultViewProps {
  results: any;
  interpretation: string;
  isVisible: boolean;
  className?: string;
}

const ResultView: React.FC<ResultViewProps> = ({
  results,
  interpretation,
  isVisible,
  className
}) => {
  if (!isVisible) return null;

  // Function to determine if the results are in the SPARQL binding format from Comunica
  const isBindingsResult = (data: any) => {
    return data && 
           Array.isArray(data) && 
           data.length > 0 && 
           typeof data[0] === 'object' &&
           Object.values(data[0]).some(v => v && typeof v === 'object' && 'value' in v);
  };

  // Extract columns from the bindings results
  const getColumns = (data: any[]) => {
    if (!data || data.length === 0) return [];
    if (isBindingsResult(data)) {
      // For SPARQL results with bindings
      return Object.keys(data[0]);
    }
    // For regular objects
    return Object.keys(data[0]);
  };

  // Get value from SPARQL binding
  const getValueFromBinding = (binding: any) => {
    if (!binding) return '';
    if (typeof binding === 'object' && 'value' in binding) {
      return binding.value;
    }
    return binding;
  };

  const columns = results && Array.isArray(results) ? getColumns(results) : [];

  return (
    <AnimatedTransition show={isVisible} animation="slide-up" delay={100}>
      <GlassCard className={cn('p-4 md:p-6', className)}>
        <div className="mb-3">
          <h3 className="text-sm font-medium text-foreground/80">Query Results</h3>
        </div>

        <Tabs defaultValue="tabular" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-background/10 backdrop-blur-sm">
            <TabsTrigger value="tabular" className="data-[state=active]:bg-white/10">Tabular</TabsTrigger>
            <TabsTrigger value="interpretation" className="data-[state=active]:bg-white/10">Interpretation</TabsTrigger>
            <TabsTrigger value="raw" className="data-[state=active]:bg-white/10">Raw Data</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tabular" className="mt-4">
            {results && Array.isArray(results) && results.length > 0 ? (
              <div className="bg-black/90 backdrop-blur-sm rounded-md overflow-auto max-h-[400px]">
                <Table className="border-collapse w-full">
                  <TableHeader className="bg-gray-900">
                    <TableRow>
                      {columns.map((column, index) => (
                        <TableHead key={index} className="border border-gray-700 text-white px-4 py-2">
                          {column}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((row: any, rowIndex: number) => (
                      <TableRow key={rowIndex} className="even:bg-gray-800">
                        {columns.map((column, colIndex) => (
                          <TableCell key={colIndex} className="border border-gray-700 text-white px-4 py-2">
                            {isBindingsResult(results) 
                              ? getValueFromBinding(row[column]) 
                              : String(row[column] || '')}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="p-4 bg-black/90 backdrop-blur-sm rounded-md">
                <p className="text-sm text-white font-medium">No results available in tabular format.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="interpretation" className="mt-4 space-y-4">
            <div className="p-4 bg-black/90 backdrop-blur-sm rounded-md">
              <p className="text-sm text-white font-medium leading-relaxed">{interpretation}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="raw" className="mt-4">
            <div className="bg-black/90 backdrop-blur-sm p-4 rounded-md overflow-auto max-h-[400px]">
              <pre className="text-xs text-white font-medium font-mono">
                {JSON.stringify(results, null, 2)}
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </GlassCard>
    </AnimatedTransition>
  );
};

export default ResultView;
