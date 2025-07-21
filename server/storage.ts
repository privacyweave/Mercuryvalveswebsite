import { users, products, clients, type User, type InsertUser, type Product, type InsertProduct, type Client, type InsertClient } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  getClients(): Promise<Client[]>;
  createClient(client: InsertClient): Promise<Client>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private clients: Map<number, Client>;
  currentUserId: number;
  currentProductId: number;
  currentClientId: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.clients = new Map();
    this.currentUserId = 1;
    this.currentProductId = 1;
    this.currentClientId = 1;
    
    // Initialize with Mercury Valves data
    this.initializeData();
  }

  private initializeData() {
    // Initialize products
    const initialProducts: Omit<Product, 'id'>[] = [
      {
        name: "Ductile Iron Grating",
        description: "High-quality ductile iron gratings for industrial applications",
        category: "Gratings",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd15.png",
        slug: "ductile-iron-grating"
      },
      {
        name: "Manhole Cover",
        description: "Durable manhole covers for municipal and industrial use",
        category: "Covers",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd14.png",
        slug: "manhole-cover"
      },
      {
        name: "Water Meter",
        description: "Precision water meters for accurate flow measurement",
        category: "Meters",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/water-meter.png",
        slug: "water-meter"
      },
      {
        name: "UPVC Agriculture Pipes Fittings",
        description: "Specialized pipes for agricultural irrigation systems",
        category: "Pipes",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/pvc1.png",
        slug: "upvc-agriculture-pipes-fittings"
      },
      {
        name: "DI, CI Valves",
        description: "Ductile iron and cast iron valves for industrial applications",
        category: "Valves",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd7_.png",
        slug: "di-ci-valves"
      },
      {
        name: "DI, CI Pipes & Fittings",
        description: "Comprehensive range of ductile iron and cast iron pipes",
        category: "Pipes",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/ductile-iron-pipe.png",
        slug: "di-ci-pipes-fittings"
      },
      {
        name: "Gun Metal Valves & SS Valves",
        description: "Premium gun metal and stainless steel valves",
        category: "Valves",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd10.png",
        slug: "gun-metal-valves-ss-valves"
      },
      {
        name: "HDPE Pipes & Fittings",
        description: "High-density polyethylene pipes for various applications",
        category: "Pipes",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/hdpe-pipes1.png",
        slug: "hdpe-pipes-fittings"
      },
      {
        name: "Galvanized Iron Pipe & Fittings",
        description: "Corrosion-resistant galvanized iron pipes",
        category: "Pipes",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/gi-pipe-fitting.png",
        slug: "galvanized-iron-pipe-fittings"
      },
      {
        name: "M.S Pipes & Fittings",
        description: "Mild steel pipes for structural applications",
        category: "Pipes",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/ms-steel.png",
        slug: "ms-pipes-fittings"
      },
      {
        name: "House Service Connection",
        description: "Complete house service connection solutions",
        category: "Connections",
        image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd13.png",
        slug: "house-service-connection"
      }
    ];

    initialProducts.forEach(product => {
      const id = this.currentProductId++;
      this.products.set(id, { ...product, id });
    });

    // Initialize clients
    const initialClients: Omit<Client, 'id'>[] = [
      {
        name: "Akhil Infra Projects Pvt ltd",
        description: "Infrastructure Development",
        industry: "Infrastructure"
      },
      {
        name: "Raja Construction",
        description: "Construction Services",
        industry: "Construction"
      },
      {
        name: "Koya & Co Construction Ltd",
        description: "Industrial Construction",
        industry: "Construction"
      },
      {
        name: "Mr. Asharaf Contractor",
        description: "Contracting Services",
        industry: "Contracting"
      },
      {
        name: "Maruthi Construction",
        description: "Construction Development",
        industry: "Construction"
      },
      {
        name: "Ujwala Infratech India Pvt Ltd",
        description: "Infrastructure Technology",
        industry: "Infrastructure"
      },
      {
        name: "R R Thulasi Builders Pvt Ltd",
        description: "Building Construction",
        industry: "Construction"
      },
      {
        name: "Aiga Engineers Pvt ltd",
        description: "Engineering Services",
        industry: "Engineering"
      },
      {
        name: "Jani Shree Corporate Services Pvt Ltd",
        description: "Corporate Services",
        industry: "Services"
      },
      {
        name: "Clou Hi Tech Innovations Pvt ltd",
        description: "Technology Solutions",
        industry: "Technology"
      },
      {
        name: "Future Fibres Engineering and Projects",
        description: "Engineering Projects",
        industry: "Engineering"
      },
      {
        name: "Larsen And Turbo Limited Construction (L & T)",
        description: "Engineering & Construction",
        industry: "Engineering"
      },
      {
        name: "T T K Construction",
        description: "Construction Services",
        industry: "Construction"
      }
    ];

    initialClients.forEach(client => {
      const id = this.currentClientId++;
      this.clients.set(id, { ...client, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(
      (product) => product.slug === slug,
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getClients(): Promise<Client[]> {
    return Array.from(this.clients.values());
  }

  async createClient(insertClient: InsertClient): Promise<Client> {
    const id = this.currentClientId++;
    const client: Client = { ...insertClient, id };
    this.clients.set(id, client);
    return client;
  }
}

export const storage = new MemStorage();
