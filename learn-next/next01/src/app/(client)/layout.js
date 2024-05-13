import Navigation from "@/components/Navigation";
import React from "react";

const ClientLayout = ({children}) => {
	return (
		<>
			<Navigation />
            {children}
		</>
	);
};

export default ClientLayout;
