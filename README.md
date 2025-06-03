# 🛍️ MultiVendor-Ecommerce

A full-stack Django-based multi-vendor eCommerce platform that enables vendors to register and list their products, while customers can browse, add to cart, and purchase products. The project includes separate panels for both vendors and customers, with token-based authentication and role-based access control.

## 🚀 Features

- **Vendor Registration & Management**: Vendors can register, manage their profiles, and list products.
- **Customer Shopping Experience**: Customers can browse products, add items to the cart, and complete purchases.
- **Role-Based Access Control**: Secure access with token-based authentication for different user roles.
- **Separate Dashboards**: Distinct interfaces for vendors and customers to manage their activities.
- **Product Management**: Vendors can add, update, and delete their products.
- **Order Processing**: Customers can place orders, and vendors can manage order statuses.

## 🛠️ Tech Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)

## 📦 Installation

### Prerequisites

- Python 3.8+
- Node.js 14+
- PostgreSQL

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/adityagirigoswami/MultiVendor-Ecommerce.git
   cd MultiVendor-Ecommerce/backend_api
   ```

2. **Create a virtual environment**:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the database**:

   Update the `settings.py` file with your PostgreSQL credentials.

5. **Apply migrations**:

   ```bash
   python manage.py migrate
   ```

6. **Create a superuser**:

   ```bash
   python manage.py createsuperuser
   ```

7. **Run the development server**:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

## 🧪 Testing

To run backend tests:

```bash
python manage.py test
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

