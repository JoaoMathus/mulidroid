import React from "react";
import { render, screen } from "@testing-library/react-native";
import LogoMulidroid from "../components/LogoMulidroid";

describe("Login", () => {
	it("mostra a logo do projeto", () => {
		render(<LogoMulidroid />);
		expect(screen.getByLabelText("A logo do aplicativo")).toBeVisible();
	});
});
