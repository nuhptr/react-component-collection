"use client"

import { TabComp } from "@/app/tabs/tab-comp"

const RandomComponent = () => {
   return (
      <div>
         <h1>Random Component</h1>
      </div>
   )
}

export default function TabsPage() {
   const tabs: Array<any> = [
      {
         label: "Tab 1",
         content: <RandomComponent />,
      },
      {
         label: "Tab 2",
         content: <div>This is content for Tab 2</div>,
      },
      {
         label: "Tab 3",
         content: <div>This is content for Tab 3</div>,
      },
   ]

   const handleChange = (currentIndex: number) => {
      console.log("Current Index: ", currentIndex)
   }

   return <TabComp tabs={tabs} onChange={handleChange} />
}
