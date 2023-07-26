import React, {useId, useState} from "react";
export function getAccordionHeaderId(accordionId, value) {
  return accordionId+'-header-'+value;
}
export function getPanelId(accordionId, value) {
  return accordionId+'-panel-'+value;
}
export default function AccordionAria( {sections} ) {
  const [openSections, setOpenSections] = useState(
    new Set(),
  );
  const accordionId = useId();
  function focusOnSection(index) {
    document
      .getElementById(
        getAccordionHeaderId(
          accordionId,
          sections[index].value,
        ),
      )
      .focus();
  };
  const handleOpen = (value) => {
    const newOpenSections = new Set(openSections);
    newOpenSections.has(value) ? newOpenSections.delete(value) : newOpenSections.add(value);
    setOpenSections(newOpenSections);
  }
  return (
    <div className={"accordion-aria"}
      onKeyDown={(event) => {
        const activeItemValue =
          document.activeElement.getAttribute(
            'data-accordion-value',
          );
        switch (event.code) {
          case 'ArrowUp': {
            const index = sections.findIndex(
              ({value: itemValue }) => {
                return itemValue === activeItemValue
            });
            focusOnSection(
              (index - 1 + sections.length ) % sections.length
            );
            break;
          }
          case 'ArrowDown': {
            const index = sections.findIndex(
              ({value: itemValue }) => {
                return itemValue === activeItemValue
              });
            focusOnSection(
              (index + 1 + sections.length ) % sections.length
            );
            break;
          }
          default:
            console.log("no keys")
        }
      }}>
      {
        sections.map(( {value, title, contents} ) => {
          const isExpanded = openSections.has(value);
          const headerId = getAccordionHeaderId(
            accordionId,
            value
          );
          const panelId = getPanelId(
            accordionId,
            value
          );

          return (
            <div className="accordion-item" key={value}>
              <button
                className={"accordion-item-title"}
                aria-controls={panelId}
                id={headerId}
                aria-expanded={isExpanded}
                onClick={()=>handleOpen(value)}
                data-accordion-value={value}>
                  {title}{' '}
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
                   role={'region'}
                   aria-labelledby={headerId}
                   id={panelId}
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

//takeaways
// react useId can generate unique ID for each instance
// role = 'region' used to identify document areas author deems significant
// // to aid in navigation

// keydown event is triggered first when user presses key
// keyup event is triggered last when user releases a key
// keypress event is triggered in between

// event codes
// Tab, ShiftLeft, ArrowDown, ArrowUp, Enter