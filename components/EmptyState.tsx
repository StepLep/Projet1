interface EmptyStateProps {
  isDarkMode: boolean;
}

export function EmptyState({ isDarkMode }: EmptyStateProps) {
  return (
    <p className={`text-center p-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
      Vous devez rechercher un aliment en utilisant la barre de recherche ci-dessus
    </p>
  );
} 