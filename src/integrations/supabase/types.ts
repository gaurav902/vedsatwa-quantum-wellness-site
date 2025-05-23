export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string | null
          name: string
          phone: string
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name: string
          phone: string
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string
          phone?: string
          status?: string | null
        }
        Relationships: []
      }
      lead_contact_numbers: {
        Row: {
          contact_number: string
          created_at: string
          id: string
          lead_id: string
        }
        Insert: {
          contact_number: string
          created_at?: string
          id?: string
          lead_id: string
        }
        Update: {
          contact_number?: string
          created_at?: string
          id?: string
          lead_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_contact_numbers_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_services: {
        Row: {
          category: string | null
          created_at: string
          id: string
          lead_id: string
          service: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          lead_id: string
          service: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          lead_id?: string
          service?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_services_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          category: string | null
          company_name: string | null
          created_at: string
          email: string | null
          id: string
          location: string | null
          status: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          category?: string | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          location?: string | null
          status?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          category?: string | null
          company_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          location?: string | null
          status?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          name: string | null
          phone_number: string | null
          role: string | null
        }
        Insert: {
          id: string
          name?: string | null
          phone_number?: string | null
          role?: string | null
        }
        Update: {
          id?: string
          name?: string | null
          phone_number?: string | null
          role?: string | null
        }
        Relationships: []
      }
      rental_leads: {
        Row: {
          address: string
          created_at: string
          id: string
          is_saturated: boolean
          name: string
          phone: string
          rating: number
          status: string
          type: string
          updated_at: string
          website: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: string
          is_saturated?: boolean
          name: string
          phone: string
          rating: number
          status?: string
          type: string
          updated_at?: string
          website: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: string
          is_saturated?: boolean
          name?: string
          phone?: string
          rating?: number
          status?: string
          type?: string
          updated_at?: string
          website?: string
        }
        Relationships: []
      }
      reservations: {
        Row: {
          created_at: string
          id: string
          payment_amount: number | null
          payment_status: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          payment_amount?: number | null
          payment_status?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          payment_amount?: number | null
          payment_status?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reservations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      stories: {
        Row: {
          approved: boolean
          consent: boolean
          created_at: string
          email: string
          featured: boolean | null
          id: string
          location: string | null
          name: string
          story: string
        }
        Insert: {
          approved?: boolean
          consent: boolean
          created_at?: string
          email: string
          featured?: boolean | null
          id?: string
          location?: string | null
          name: string
          story: string
        }
        Update: {
          approved?: boolean
          consent?: boolean
          created_at?: string
          email?: string
          featured?: boolean | null
          id?: string
          location?: string | null
          name?: string
          story?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
