import { ApplicationManager } from "../ApplicationManager.js";
import { AbstractPOM } from "./AbstractPOM.js";

export class UserManagementPagePOM extends AbstractPOM {
    constructor(private appManager: ApplicationManager) {
        super();
    }

    showPage(): void {
        this.clearPageContent();

        const container = document.createElement("div");
        container.id = "UserManagementPage";
        container.innerHTML = `
            <div class="container py-4">
                <h2>User Management</h2>
                <p>Hier wird später die Benutzerverwaltung erscheinen.</p>
            </div>
        `;

        document.getElementById("PageContent")?.appendChild(container);
    }
}