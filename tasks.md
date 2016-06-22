# Aufgaben

## 1 - Komponente erstellen

Lagern Sie das Formular zum erstellen eines Buchs in eine eigene Komponente `CreateBookForm` aus.
Stellen Sie sicher, dass diese Komponente das Ereignis `(book-created)` veröffentlicht, wenn ein Buch erstellt wurde.
Verarbeiten Sie das Ereignis in der `DashboardCompoent`, um das erstellte Buch der Liste hinzuzufügen. 

## 2 - Tests für das Model `Book` schreiben

Es wurde entschieden, dass der Wert eines Ratings nur zwischen `0` und `5` liegen darf.
Weisen sie mit einem Unit-Test nach, dass die fachliche Anforderung erfüllt ist.

```typescript
// /src/app/shared/book.spec.ts
describe('Rating a book', () => {
    it('should not be allowed to have a rating greater than 5', () => {
        // test
    });

     it('should not be possible have a rating smaller than 0', () => {
        // test
    });
});
```

## 3 - Validator schreiben

Um sicherzustellen, dass der Titel eines Buchs nur ein Mal vorkommt, soll ein Validator `CheckUniqueTitle` implementiert werden.
Wenn der Titel beriets existeirt, soll das Formular nicht versendet werden dürfen.
Außerdem, soll folgende Nachricht angezeigt werden: 'Der Titel dieses Buchs existiert bereits.'