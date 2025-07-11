
import { QueryEngine } from '@comunica/query-sparql';

// Simulated delay to mimic API calls
const simulateDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Create a new query engine
const engine = new QueryEngine();

// Full RDF schema for collaborative MDE tool designers
const FULL_RDF_SCHEMA = `@prefix : <http://example.org/ontology#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

### Individuals - Usability Taxons
:Clarity a :UsabilityTaxon ;
    rdfs:label "Clarity" .

:Memorability a :UsabilityTaxon ;
    rdfs:label "Memorability" .

:Consistency a :UsabilityTaxon ;
    rdfs:label "Consistency" .

:Helpfulness a :UsabilityTaxon ;
    rdfs:label "Helpfulness" .

:Completeness a :UsabilityTaxon ;
    rdfs:label "Completeness" .

:Precision a :UsabilityTaxon ;
    rdfs:label "Precision" .

:Universality a :UsabilityTaxon ;
    rdfs:label "Universality" .

:Flexibility a :UsabilityTaxon ;
    rdfs:label "Flexibility" .

:Efficiency a :UsabilityTaxon ;
    rdfs:label "Efficiency" .

:Robustness a :UsabilityTaxon ;
    rdfs:label "Robustness" .

:Safety a :UsabilityTaxon ;
    rdfs:label "Safety" .

:SubjectiveSatisfaction a :UsabilityTaxon ;
    rdfs:label "Subjective Satisfaction" .

### Individuals - Features
:ModelsAndLanguages a :CollaborativeModelingFeature ;
    rdfs:label "Models and Languages" .

:ModelManipulationAndQuery a :CollaborativeModelingFeature ;
    rdfs:label "Model Manipulation and Query" .

:EditorsAndEnvironments a :CollaborativeModelingFeature ;
    rdfs:label "Editors and Modeling Environments" .

:StakeholderManagement a :CollaborativeModelingFeature ;
    rdfs:label "Stakeholder Management & Access Control" .

:CollaborationDynamics a :CollaborativeModelingFeature ;
    rdfs:label "Collaboration Dynamics" .

:Versioning a :CollaborativeModelingFeature ;
    rdfs:label "Versioning" .

:ConflictsAndConsistency a :CollaborativeModelingFeature ;
    rdfs:label "Conflicts and Consistency" .

:NetworkArchitecture a :CollaborativeModelingFeature ;
    rdfs:label "Network Architecture & Robustness" .

:SynchronousCommunication a :CollaborativeModelingFeature ;
    rdfs:label "Synchronous Communication" .

:AsynchronousCommunication a :CollaborativeModelingFeature ;
    rdfs:label "Asynchronous Communication" .

:Integration a :CollaborativeModelingFeature ;
    rdfs:label "Integration" .

### Links

### Clarity
:Link1 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link2 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :EditorsAndEnvironments ;
    :weight 2 .

:Link3 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 2 .

:Link4 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :StakeholderManagement ;
    :weight 2 .

:Link5 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :CollaborationDynamics ;
    :weight 1 .

:Link6 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :Versioning ;
    :weight 2 .

:Link7 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :ConflictsAndConsistency ;
    :weight 2 .

:Link8 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link9 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :SynchronousCommunication ;
    :weight 1 .

:Link10 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :AsynchronousCommunication ;
    :weight 1 .

:Link11 a :Link ;
    :fromTaxon :Clarity ;
    :toFeature :Integration ;
    :weight 2 .

# Memorability links
:Link12 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link13 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 1 .

:Link14 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :EditorsAndEnvironments ;
    :weight 2 .

:Link15 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :StakeholderManagement ;
    :weight 2 .

:Link16 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :CollaborationDynamics ;
    :weight 1 .

:Link17 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :Versioning ;
    :weight 2 .

:Link18 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link19 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link20 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :SynchronousCommunication ;
    :weight 1 .

:Link21 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :AsynchronousCommunication ;
    :weight 1 .

:Link22 a :Link ;
    :fromTaxon :Memorability ;
    :toFeature :Integration ;
    :weight 2 .

# Consistency links
:Link23 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link24 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 2 .

:Link25 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :EditorsAndEnvironments ;
    :weight 2 .

:Link26 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :StakeholderManagement ;
    :weight 0 .

:Link27 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :CollaborationDynamics ;
    :weight 1 .

:Link28 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :Versioning ;
    :weight 2 .

:Link29 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :ConflictsAndConsistency ;
    :weight 2 .

:Link30 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link31 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :SynchronousCommunication ;
    :weight 2 .

:Link32 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :AsynchronousCommunication ;
    :weight 2 .

:Link33 a :Link ;
    :fromTaxon :Consistency ;
    :toFeature :Integration ;
    :weight 2 .

# Helpfulness links
:Link34 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :ModelsAndLanguages ;
    :weight 2 .

:Link35 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 1 .

:Link36 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :EditorsAndEnvironments ;
    :weight 2 .

:Link37 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :StakeholderManagement ;
    :weight 0 .

:Link38 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :CollaborationDynamics ;
    :weight 0 .

:Link39 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :Versioning ;
    :weight 1 .

:Link40 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link41 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link42 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :SynchronousCommunication ;
    :weight 0 .

:Link43 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :AsynchronousCommunication ;
    :weight 0 .

:Link44 a :Link ;
    :fromTaxon :Helpfulness ;
    :toFeature :Integration ;
    :weight 0 .

# Completeness links
:Link45 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :ModelsAndLanguages ;
    :weight 1 .

:Link46 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link47 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :EditorsAndEnvironments ;
    :weight 1 .

:Link48 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :StakeholderManagement ;
    :weight 1 .

:Link49 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :CollaborationDynamics ;
    :weight 1 .

:Link50 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :Versioning ;
    :weight 0 .

:Link51 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link52 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link53 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :SynchronousCommunication ;
    :weight 0 .

:Link54 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :AsynchronousCommunication ;
    :weight 0 .

:Link55 a :Link ;
    :fromTaxon :Completeness ;
    :toFeature :Integration ;
    :weight 2 .

# Precision links
:Link56 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :ModelsAndLanguages ;
    :weight 2 .

:Link57 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link58 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :EditorsAndEnvironments ;
    :weight 1 .

:Link59 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :StakeholderManagement ;
    :weight 2 .

:Link60 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :CollaborationDynamics ;
    :weight 0 .

:Link61 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :Versioning ;
    :weight 0 .

:Link62 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link63 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link64 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :SynchronousCommunication ;
    :weight 0 .

:Link65 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :AsynchronousCommunication ;
    :weight 0 .

:Link66 a :Link ;
    :fromTaxon :Precision ;
    :toFeature :Integration ;
    :weight 2 .

# Universality links
:Link67 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link68 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link69 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :EditorsAndEnvironments ;
    :weight 1 .

:Link70 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :StakeholderManagement ;
    :weight 0 .

:Link71 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :CollaborationDynamics ;
    :weight 0 .

:Link72 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :Versioning ;
    :weight 0 .

:Link73 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link74 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link75 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :SynchronousCommunization ;
    :weight 0 .

:Link76 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :AsynchronousCommunication ;
    :weight 1 .

:Link77 a :Link ;
    :fromTaxon :Universality ;
    :toFeature :Integration ;
    :weight 2 .

# Flexibility links
:Link78 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :ModelsAndLanguages ;
    :weight 1 .

:Link79 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link80 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :EditorsAndEnvironments ;
    :weight -1 .

:Link81 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :StakeholderManagement ;
    :weight 1 .

:Link82 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :CollaborationDynamics ;
    :weight 2 .

:Link83 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :Versioning ;
    :weight -1 .

:Link84 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :ConflictsAndConsistency ;
    :weight 2 .

:Link85 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link86 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :SynchronousCommunication ;
    :weight 1 .

:Link87 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :AsynchronousCommunication ;
    :weight 2 .

:Link88 a :Link ;
    :fromTaxon :Flexibility ;
    :toFeature :Integration ;
    :weight 2 .

# Efficiency links (aggregated from sub-attributes)
:Link89 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link90 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 1 .

:Link91 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :EditorsAndEnvironments ;
    :weight 1 .

:Link92 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :StakeholderManagement ;
    :weight 0 .

:Link93 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :CollaborationDynamics ;
    :weight 1 .

:Link94 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :Versioning ;
    :weight 0 .

:Link95 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link96 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :NetworkArchitecture ;
    :weight 1 .

:Link97 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :SynchronousCommunication ;
    :weight 1 .

:Link98 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :AsynchronousCommunication ;
    :weight 0 .

:Link99 a :Link ;
    :fromTaxon :Efficiency ;
    :toFeature :Integration ;
    :weight 0 .

# Robustness links (aggregated from sub-attributes)
:Link100 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link101 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link102 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :EditorsAndEnvironments ;
    :weight 1 .

:Link103 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :StakeholderManagement ;
    :weight 1 .

:Link104 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :CollaborationDynamics ;
    :weight 1 .

:Link105 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :Versioning ;
    :weight 1 .

:Link106 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :ConflictsAndConsistency ;
    :weight 1 .

:Link107 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :NetworkArchitecture ;
    :weight 1 .

:Link108 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :SynchronousCommunication ;
    :weight 0 .

:Link109 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :AsynchronousCommunication ;
    :weight 1 .

:Link110 a :Link ;
    :fromTaxon :Robustness ;
    :toFeature :Integration ;
    :weight 0 .

# Safety links (aggregated from sub-attributes)
:Link111 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :ModelsAndLanguages ;
    :weight 0 .

:Link112 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link113 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :EditorsAndEnvironments ;
    :weight 0 .

:Link114 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :StakeholderManagement ;
    :weight 0 .

:Link115 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :CollaborationDynamics ;
    :weight 0 .

:Link116 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :Versioning ;
    :weight 0 .

:Link117 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :ConflictsAndConsistency ;
    :weight 0 .

:Link118 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :NetworkArchitecture ;
    :weight 2 .

:Link119 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :SynchronousCommunication ;
    :weight 1 .

:Link120 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :AsynchronousCommunication ;
    :weight 1 .

:Link121 a :Link ;
    :fromTaxon :Safety ;
    :toFeature :Integration ;
    :weight 0 .

# Subjective Satisfaction links (Interest + Aesthetics)
:Link122 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :ModelsAndLanguages ;
    :weight 1 .

:Link123 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :ModelManipulationAndQuery ;
    :weight 0 .

:Link124 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :EditorsAndEnvironments ;
    :weight 2 .

:Link125 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :StakeholderManagement ;
    :weight 0 .

:Link126 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :CollaborationDynamics ;
    :weight 2 .

:Link127 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :Versioning ;
    :weight 0 .

:Link128 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :ConflictsAndConsistency ;
    :weight 1 .

:Link129 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :NetworkArchitecture ;
    :weight 0 .

:Link130 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :SynchronousCommunication ;
    :weight 1 .

:Link131 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :AsynchronousCommunication ;
    :weight 1 .

:Link132 a :Link ;
    :fromTaxon :SubjectiveSatisfaction ;
    :toFeature :Integration ;
    :weight 1 .`;

// RDF schema for collaborative MDE tool designers - same as the above, but kept for backwards compatibility
const RDF_SCHEMA = FULL_RDF_SCHEMA;

// Example SPARQL queries for different natural language inputs
const SPARQL_EXAMPLES: Record<string, string> = {
  default: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?scientist ?name ?birthPlace ?award
WHERE {
  ?scientist a dbo:Scientist ;
            rdfs:label ?name ;
            dbo:birthPlace ?place .
  ?place rdfs:label ?birthPlace .
  ?scientist dbo:award ?award .
  FILTER(LANG(?name) = "en")
  FILTER(LANG(?birthPlace) = "en")
  FILTER(CONTAINS(LCASE(?birthPlace), "germany"))
  FILTER(CONTAINS(LCASE(STR(?award)), "nobel"))
}
LIMIT 10`,

  renaissance: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?painting ?title ?artist ?artistName ?year
WHERE {
  ?painting a dbo:Artwork ;
           rdfs:label ?title ;
           dbo:author ?artist .
  ?artist rdfs:label ?artistName .
  OPTIONAL { ?painting dbo:completionDate ?year . }
  ?artist dbo:birthPlace ?place .
  ?place rdfs:label ?country .
  FILTER(LANG(?title) = "en")
  FILTER(LANG(?artistName) = "en")
  FILTER(LANG(?country) = "en")
  FILTER(?year >= "1400"^^xsd:integer && ?year <= "1600"^^xsd:integer)
}
LIMIT 20`,

  nolan: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?movie ?title ?year
WHERE {
  ?movie a dbo:Film ;
         rdfs:label ?title ;
         dbo:director dbr:Christopher_Nolan .
  OPTIONAL { ?movie dbo:releaseDate ?year . }
  FILTER(LANG(?title) = "en")
  FILTER(?year >= "2010-01-01"^^xsd:date)
}
ORDER BY DESC(?year)
LIMIT 10`,

  universities: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?university ?name
WHERE {
  ?university a dbo:University ;
              rdfs:label ?name ;
              dbo:country dbr:United_States ;
              dbo:state dbr:California .
  ?university dbo:facultySize ?faculty .
  ?program rdfs:label ?programName ;
           dbo:institution ?university .
  FILTER(LANG(?name) = "en")
  FILTER(CONTAINS(LCASE(?programName), "computer science"))
}
ORDER BY ?name
LIMIT 15`
};

// Example results for different queries
const MOCK_RESULTS: Record<string, any> = {
  default: [
    { scientist: "Albert Einstein", birthPlace: "Ulm, Germany", award: "Nobel Prize in Physics" },
    { scientist: "Max Planck", birthPlace: "Kiel, Germany", award: "Nobel Prize in Physics" },
    { scientist: "Werner Heisenberg", birthPlace: "Würzburg, Germany", award: "Nobel Prize in Physics" }
  ],
  renaissance: [
    { painting: "Mona Lisa", artist: "Leonardo da Vinci", year: "1503" },
    { painting: "The Birth of Venus", artist: "Sandro Botticelli", year: "1485" },
    { painting: "The Last Supper", artist: "Leonardo da Vinci", year: "1498" }
  ],
  nolan: [
    { movie: "Oppenheimer", year: "2023" },
    { movie: "Tenet", year: "2020" },
    { movie: "Dunkirk", year: "2017" },
    { movie: "Interstellar", year: "2014" }
  ],
  universities: [
    { university: "Stanford University", location: "Stanford, California" },
    { university: "University of California, Berkeley", location: "Berkeley, California" },
    { university: "California Institute of Technology", location: "Pasadena, California" }
  ]
};

// Example interpretations for different queries
const MOCK_INTERPRETATIONS: Record<string, string> = {
  default: "I found 3 German scientists who won Nobel Prizes. Albert Einstein, born in Ulm, Germany, received the Nobel Prize in Physics for his work on the photoelectric effect. Max Planck, born in Kiel, was awarded the Nobel Prize in Physics for his discovery of energy quanta. Werner Heisenberg, from Würzburg, received the Nobel Prize in Physics for creating quantum mechanics.",
  
  renaissance: "The query returned 3 notable paintings from the Italian Renaissance period. The 'Mona Lisa'was painted by Leonardo da Vinci around 1503 and is one of the most famous portraits in history. 'The Birth of Venus' was created by Sandro Botticelli in approximately 1485 and depicts the goddess Venus arriving at the shore. 'The Last Supper' is another masterpiece by Leonardo da Vinci, completed around 1498, depicting Jesus's final meal with his apostles.",
  
  nolan: "Christopher Nolan has directed 4 films since 2010. His most recent film is 'Oppenheimer' (2023), which tells the story of J. Robert Oppenheimer and the development of the atomic bomb. Before that, he directed 'Tenet' in 2020, a science fiction action thriller involving time manipulation. 'Dunkirk' (2017) is a war film about the Dunkirk evacuation during World War II, and 'Interstellar' (2014) explores space travel and relativity.",
  
  universities: "The query found 3 prestigious universities in California that offer computer science programs. Stanford University in Stanford is renowned for its computer science department and connections to Silicon Valley. The University of California, Berkeley (UC Berkeley) has a strong computer science program with historical contributions to UNIX and computer architecture. The California Institute of Technology (Caltech) in Pasadena is known for its rigorous computer science curriculum and research in algorithms and computational theory."
};

// Helper function to clean markdown code blocks from LLM responses
const cleanMarkdownCodeBlocks = (text: string): string => {
  // Remove markdown code block syntax (```sparql or ``` at start and ``` at end)
  return text.replace(/^```(?:sparql)?\s*|\s*```$/g, '').trim();
};

// LLM service for SPARQL generation
const generateSparqlWithGPT = async (query: string): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('openai_api_key') || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are a SPARQL query generator for collaborative Model-Driven Engineering (MDE) tool designers. Your task is to convert natural language questions into valid SPARQL queries for the following RDF schema, which represents a knowledge base about usability aspects and features of collaborative modeling tools:

${RDF_SCHEMA}

The users are collaborative MDE tool designers who are seeking insights on how to build their tools based on this dataset, which links usability taxons to collaborative modeling features with weighted relationships.

Follow these rules:
1. Include all necessary prefix declarations at the beginning of your query (including :, rdf:, rdfs:, xsd:, owl: as needed)
2. Make sure the query is complete and valid
3. Ensure the query has appropriate FILTER, ORDER BY, or LIMIT clauses as needed
4. Return ONLY the SPARQL query, no explanations or comments
5. Always include PREFIX declarations for all prefixes used in your query

If the question cannot be answered by the dataset, e.g. the information about weighting UX Taxons and Collaborative Modelling features is not enough, refuse to generate a query.`
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.2,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const rawContent = data.choices[0].message.content.trim();
    
    // Clean markdown code blocks from the response
    return cleanMarkdownCodeBlocks(rawContent);
  } catch (error) {
    console.error('Error generating SPARQL with GPT:', error);
    throw error;
  }
};

// Generate SPARQL query from natural language
export const generateSparqlQuery = async (naturalLanguageQuery: string): Promise<string> => {
  // Check if API key is set
  const apiKey = localStorage.getItem('openai_api_key');
  
  if (!apiKey) {
    // Fall back to mock data if no API key
    await simulateDelay(1000);
    
    // Select a SPARQL example based on keywords in the query
    const query = naturalLanguageQuery.toLowerCase();
    
    if (query.includes('renaissance') || query.includes('italian artists') || query.includes('paintings')) {
      return SPARQL_EXAMPLES.renaissance;
    } else if (query.includes('nolan') || query.includes('movies') || query.includes('films')) {
      return SPARQL_EXAMPLES.nolan;
    } else if (query.includes('universities') || query.includes('california')) {
      return SPARQL_EXAMPLES.universities;
    } else {
      return SPARQL_EXAMPLES.default;
    }
  }
  
  // Use real LLM if API key is set
  try {
    return await generateSparqlWithGPT(naturalLanguageQuery);
  } catch (error) {
    console.error('Error generating SPARQL query:', error);
    
    // Fall back to mock data if LLM fails
    const query = naturalLanguageQuery.toLowerCase();
    if (query.includes('renaissance') || query.includes('italian artists') || query.includes('paintings')) {
      return SPARQL_EXAMPLES.renaissance;
    } else if (query.includes('nolan') || query.includes('movies') || query.includes('films')) {
      return SPARQL_EXAMPLES.nolan;
    } else if (query.includes('universities') || query.includes('california')) {
      return SPARQL_EXAMPLES.universities;
    } else {
      return SPARQL_EXAMPLES.default;
    }
  }
};

// Execute SPARQL query
export const executeSparqlQuery = async (sparqlQuery: string): Promise<any> => {
  // Check if API key is set - we'll use the same condition as in generateSparqlQuery
  const apiKey = localStorage.getItem('openai_api_key');
  
  if (!apiKey) {
    // Fall back to mock data if no API key
    await simulateDelay(1500);
    
    // Select mock results based on keywords in the query
    const query = sparqlQuery.toLowerCase();
    
    if (query.includes('renaissance') || query.includes('artwork') || query.includes('painting')) {
      return MOCK_RESULTS.renaissance;
    } else if (query.includes('nolan') || query.includes('movie') || query.includes('film')) {
      return MOCK_RESULTS.nolan;
    } else if (query.includes('university') || query.includes('california')) {
      return MOCK_RESULTS.universities;
    } else {
      return MOCK_RESULTS.default;
    }
  }
  
  // Use real query engine if API key is set
  try {
    console.info('Executing SPARQL query:', sparqlQuery);
    
    // Execute the SPARQL query against the in-memory dataset
    const result = await engine.query(sparqlQuery, {
      sources: [
        // Use the RDF schema as the data source
        { type: 'stringSource', value: FULL_RDF_SCHEMA, mediaType: 'text/turtle' }
      ],
    });
    
    // Collect the bindings
    const bindings: any[] = [];
    const output = await result.execute();
    
    // Process and collect bindings - handle different result types
    if (output && typeof output === 'object' && 'on' in output) {
      // Handle bindingsStream case
      const stream = output as any;
      
      stream.on('data', (binding: any) => {
        bindings.push(binding);
      });
      
      // Wait for the query to complete
      await new Promise<void>((resolve, reject) => {
        stream.on('end', () => resolve());
        stream.on('error', (error: Error) => reject(error));
      });
    }
    
    console.info('Query executed successfully with results:', bindings);
    
    // Process bindings to a more friendly format
    const processedResults = bindings.map(binding => {
      const result: Record<string, any> = {};
      if (binding && binding.entries) {
        const keys = binding.entries.keys();
        
        for (const key of keys) {
          const value = binding.get(key);
          if (value) {
            result[key] = value.value;
          }
        }
      }
      
      return result;
    });
    
    return processedResults.length > 0 ? processedResults : [{ message: 'No results found for the query' }];
  } catch (error) {
    console.error('Error executing SPARQL query:', error);
    throw error;
  }
};

// Interpret query results using LLM
export const interpretResults = async (results: any, originalQuery: string): Promise<string> => {
  // Check if API key is set
  const apiKey = localStorage.getItem('openai_api_key');
  
  if (!apiKey) {
    // Fall back to mock interpretations if no API key
    await simulateDelay(2000);
    
    // Select interpretation based on results structure or original query
    const query = originalQuery.toLowerCase();
    
    if (query.includes('renaissance') || query.includes('italian artists') || query.includes('paintings')) {
      return MOCK_INTERPRETATIONS.renaissance;
    } else if (query.includes('nolan') || query.includes('movies') || query.includes('films')) {
      return MOCK_INTERPRETATIONS.nolan;
    } else if (query.includes('universities') || query.includes('california')) {
      return MOCK_INTERPRETATIONS.universities;
    } else {
      return MOCK_INTERPRETATIONS.default;
    }
  }
  
  // Use real LLM if API key is set
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are an expert at interpreting SPARQL query results. The user will provide you with query results and the original natural language query. Your task is to interpret the results in a clear, concise way that directly addresses their query. Focus on the most important insights from the data. Your response should be approximately 3-5 sentences.`
          },
          {
            role: 'user',
            content: `Original query: "${originalQuery}"
            
Query results: ${JSON.stringify(results, null, 2)}

Please interpret these results in plain language.`
          }
        ],
        temperature: 0.3,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error interpreting results:', error);
    throw error;
  }
};
