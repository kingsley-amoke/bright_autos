import React, { Suspense } from "react";
import InventoryList from "./inventory_list";

const InventoryPage = () => {
  return (
    <Suspense fallback={<div>Loading inventory list...</div>}>
      <InventoryList />
    </Suspense>
  );
};

export default InventoryPage;
