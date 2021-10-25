import { render, screen, fireEvent, getByText } from "@testing-library/vue";
import TodoList from "@/components/TodoList.vue";
describe("TodoList.vue", () => {
    it("a todo can be added to the list ", async () => {
        render(TodoList);
        const input = screen.getByLabelText(/nueva tarea/i);
        const submitButton = screen.getByText(/crear tarea/i);
        //todo - ver como va la librería de userEvent (hace falta la libreria de npm
        // testing-library/user-event )
        await fireEvent.update(input, "valor1");
        await fireEvent.click(submitButton)

        const listElements = screen.getByRole("list", { name: 'taksList' });
        getByText(listElements, 'valor1');
    });

    it("multiple todos can be added ", async () => {
        render(TodoList);
        const input = screen.getByText(/nueva tarea/i);
        const submitButton = screen.getByText(/crear tarea/i);
        //todo - ver como va la librería de userEvent (hace falta la libreria de npm
        // testing-library/user-event )
        await fireEvent.update(input, "valor1");
        await fireEvent.click(submitButton);
        await fireEvent.update(input, "valor2");
        await fireEvent.click(submitButton);
        const listElements = screen.getByRole("list");
        expect(listElements.childElementCount).toEqual(2);
    });

    it("given a todo should display the name of the todo", async () => {
        render(TodoList);
        const input = screen.getByText(/nueva tarea/i);
        const submitButton = screen.getByText(/crear tarea/i);
        await fireEvent.update(input, "valor1");
        await fireEvent.click(submitButton);
        console.log(`texto: ${screen.getByRole("listitem").childNodes[0].textContent}`);
        // const listElement = screen.getByText(/valor1/i);
        // expect(listElement).toContain("valor");

    })

});

