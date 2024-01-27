import { useEffect } from 'react'

function CustomTabContent() {
  useEffect(() => {
    console.log('custom tab content')
  }, [])
  return <div>Tab content</div>
}

export function customIntegration() {
  return {
    name: 'custom-integration',
    tabs: () => [
      {
        id: 'custom',
        title: 'Custom Integration',
        content: CustomTabContent,
      },
    ],
  }
}
