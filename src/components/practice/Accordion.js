import React, {useState} from "react";

// An Accordion is a vertically stacked set of interactive headings
// are commonly used to reduce the need to scroll when presenting multiple sections
// of content on a single page
export default function Accordion( {sections} ) {
  const [openSections, setOpenSections] = useState(
    new Set(),
  );

  const handleOpen = (value) => {
    const newOpenSections = new Set(openSections);
    newOpenSections.has(value) ? newOpenSections.delete(value) : newOpenSections.add(value);
    setOpenSections(newOpenSections);
  }
  return (
    <div className={"accordion"}>
      {
        sections.map(( {value, title, contents} ) => {
          const isExpanded = openSections.has(value);
          return (
            <div className="accordion-item">
              <button onClick={()=>handleOpen(value)}>
                {title}
                <span
                  aria-hidden={true}
                  className={[
                    'accordion-icon',
                    isExpanded && 'accordion-icon--rotated',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                />
              </button>
                <div className='accordion-item-contents'
                  hidden={!isExpanded}>
                  {contents}
                </div>
            </div>
          );
        })
      }
    </div>
  );
};

// takeaways
// ES6 JS Set()
// aria-hidden for icons
// //  purely decorative, it is wise to exclude them from accessibility tree
