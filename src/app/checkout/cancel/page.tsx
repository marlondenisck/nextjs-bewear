import { XCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutCancelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-xl">Pagamento Cancelado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-muted-foreground">
              Seu pagamento foi cancelado. Nenhum valor foi cobrado.
            </p>
            <div className="space-y-2">
              <Button asChild className="w-full">
                <Link href="/">Voltar para a Página Inicial</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link href="/">Continuar Comprando</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}