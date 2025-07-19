import { test, expect } from "@playwright/test";

test("проверка отображения элементов навигации хедера", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("link", { name: "Playwright logo Playwright" })
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Docs" })).toBeVisible();
  await expect(page.getByRole("link", { name: "API" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Node.js" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Community", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "GitHub repository" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Discord server", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Switch between dark and light" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Search (Command+K)" })
  ).toBeVisible();
});

test("проверка названия элементов навагиции хедера", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("link", { name: "Playwright logo Playwright" })
  ).toContainText("Playwright");

  await expect(page.getByRole("link", { name: "Docs" })).toContainText("Docs");

  await expect(page.getByRole("button", { name: "Node.js" })).toContainText(
    "Node.js"
  );

  await expect(
    page.getByRole("link", { name: "Community", exact: true })
  ).toContainText("Community");

  await expect(page.getByRole("link", { name: "API" })).toContainText("API");
});

test("проверка атрибутов href навигация хедера", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("link", { name: "Playwright logo Playwright" })
  ).toHaveAttribute("href", "/");

  await expect(page.getByRole("link", { name: "Docs" })).toHaveAttribute(
    "href",
    "/docs/intro"
  );

  await expect(
    page.getByRole("link", { name: "Community", exact: true })
  ).toHaveAttribute("href", "/community/welcome");

  await expect(page.getByRole("link", { name: "API" })).toHaveAttribute(
    "href",
    "/docs/api/class-playwright"
  );

  await expect(
    page.getByRole("link", { name: "GitHub repository" })
  ).toHaveAttribute("href", "https://github.com/microsoft/playwright");

  await expect(
    page.getByRole("link", { name: "Discord server", exact: true })
  ).toHaveAttribute("href", "https://aka.ms/playwright/discord");
});

test("проверка переключения лайт мода в навигации хедера", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.getByLabel("Switch between dark and light").click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
});

test("проверка мейн заголовка на странице", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("heading", { name: "Playwright enables reliable" })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { name: "Playwright enables reliable" })
  ).toContainText(
    "Playwright enables reliable end-to-end testing for modern web apps."
  );
});

test("проверка кнопки get started", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toBeVisible();

  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toContainText("Get started");

  await expect
    .soft(page.getByRole("link", { name: "Get started" }))
    .toHaveAttribute("href", "/docs/intro");
});


