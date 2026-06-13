# UI Rules

## 🎨 Design Philosophy

- Minimalistic
- Dark mode first
- Clean and readable layouts
- Functional over decorative

---

## 🧱 Component Rules

- No inline styles
- All styling must use Tailwind utility classes
- UI components must be reusable
- UI layer must not contain business logic
- Data fetching must not occur inside UI components

---

## 📐 Layout & Spacing

- Consistent spacing scale
- Use Tailwind spacing system
- Avoid hardcoded pixel values unless necessary
- Maintain visual hierarchy (heading → subheading → content)

---

## 📝 Forms & Interaction

- Forms must include validation
- Inputs must be reusable components
- Error states must be visually clear
- Buttons must have loading states when applicable

---

## 🔒 Separation of Concerns

- Routing layer handles structure
- UI layer handles presentation
- Service layer handles logic
- Database access never occurs in UI