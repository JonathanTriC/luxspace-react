import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Success from "parts/Congratulation/Success";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function Congratulation() {
	return (
		<>
			<Header theme="black" />
			<Breadcrumb
				list={[
					{ url: "/", name: "Home" },
					{ url: "/congratulation", name: "Success Checkout" },
				]}
			/>

			<Success />

			<Sitemap />
			<Footer />
		</>
	);
}
