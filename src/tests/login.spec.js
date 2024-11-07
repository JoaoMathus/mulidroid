import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Image } from "react-native";
import LogoMulidroid from "../components/LogoMulidroid";

/**
 * Quando 'esqueceu a senha?' estiver implementado, testá-lo.
 */
describe("Login", () => {
	it("mostra a logo do projeto", () => {
		render(<LogoMulidroid />);
		expect(screen.getByLabelText("A logo do aplicativo")).toBeVisible();
	});
});
