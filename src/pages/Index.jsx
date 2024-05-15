import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Select, Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { FaExchangeAlt, FaBitcoin, FaEthereum, FaDollarSign } from "react-icons/fa";

const Index = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(null);

  const handleExchange = () => {
    // Mock exchange rate for demonstration purposes
    const rates = {
      BTC: { USD: 30000, ETH: 15 },
      ETH: { USD: 2000, BTC: 0.066 },
      USD: { BTC: 0.000033, ETH: 0.0005 },
    };

    const rate = rates[fromCurrency][toCurrency];
    setExchangeRate(rate);
    setResult(amount * rate);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Cryptocurrency Exchange
        </Text>
        <HStack spacing={4} width="100%">
          <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USD">USD</option>
          </Select>
          <IconButton aria-label="Exchange" icon={<FaExchangeAlt />} onClick={handleExchange} />
          <Select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="USD">USD</option>
          </Select>
        </HStack>
        {result !== null && (
          <Text fontSize="2xl" fontWeight="bold">
            {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
          </Text>
        )}
        <Table variant="simple" width="100%">
          <Thead>
            <Tr>
              <Th>Currency</Th>
              <Th>Icon</Th>
              <Th>Exchange Rate (to USD)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Bitcoin (BTC)</Td>
              <Td>
                <FaBitcoin />
              </Td>
              <Td>30000</Td>
            </Tr>
            <Tr>
              <Td>Ethereum (ETH)</Td>
              <Td>
                <FaEthereum />
              </Td>
              <Td>2000</Td>
            </Tr>
            <Tr>
              <Td>US Dollar (USD)</Td>
              <Td>
                <FaDollarSign />
              </Td>
              <Td>1</Td>
            </Tr>
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Index;
