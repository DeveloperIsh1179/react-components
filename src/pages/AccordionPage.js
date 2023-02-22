import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'srerse',
      label: 'Can I use React on a project',
      content: 'You can use React on any project you want'
    },
    {
      id: 'farec',
      label: 'Can I use Javascript on a project',
      content: 'You can use React on any project you want'
    },
    {
      id: 'arerec',
      label: 'Can I use CSS on a project',
      content: 'You can use React on any project you want'
    }
  ]
  
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default AccordionPage;